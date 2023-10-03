import connectMongoDB from "@/utils/connectMongoDB";
import Task from "@/Models/task";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await connectMongoDB();
    const {title, status} = await request.json();
    console.log('Got value', title , status); 
    await Task.create({title,status});
    console.log("Value added on database");
    return NextResponse.json({message: "Task created"})
}

export async function GET(request: Request) {
    await connectMongoDB();
    const tasks = await Task.find({});
    console.log(tasks);
    return NextResponse.json(tasks);
}

export async function DELETE(request: Request){
    await connectMongoDB();
    const {id} = await request.json();
    await Task.findByIdAndDelete(id);
    console.log('Value deleted');
    return NextResponse.json({message: "Task deleted"});
}