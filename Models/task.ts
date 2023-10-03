import mongoose, {Schema} from "mongoose";

const TaskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.models.Task ||  mongoose.model("Task", TaskSchema);

export default Task;