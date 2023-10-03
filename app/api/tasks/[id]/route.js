import connectMongoDB from "@/utils/connectMongoDB";
import Task from "@/Models/task";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    console.log('Got id', id ); 

    await connectMongoDB();

    const {title, status} = await request.json();
    console.log('Got value', title , status); 
    
    await Task.findByIdAndUpdate(id, {title,status});
    
    console.log("Value added on database");
    return NextResponse.json({message: "Task updated"})
}

export async function GET(request, {params}){
    const {id} = params;
    console.log('Got id', id ); 

    await connectMongoDB();
    
    const task = await Task.findOne({_id: id});
    
    console.log("Value added on database");
    return NextResponse.json({task}, {status: 200})
}