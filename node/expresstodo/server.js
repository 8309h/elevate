const express =  require("express");

const app = express();

app.use(express.json());

let tasks = [
      { id: 1, title: "Revise Node.js", completed: false },
      { id: 2, title: "Practice Express routes", completed: true }
];

app.get("/home",(req,res) => {
      res.json("Welcome To TODO")
})
app.get("/tasks", (req, res) => {
      res.status(200).json({
            message: "Get Successfully",
            data: tasks
      });
});

app.get("tasks/:id",(req,res) => {
      const taskId = Number(req.params.id);

      const task = tasks.find((t)=> t.id == taskId);
      if(!tasks) {
               return res.status(404).json({
                  error : "task not Found"
               })          
      }
      res.status(200).json({data: task})
})

app.post("/tasks",(req,res) => {
      const {title} = req.body;

      if (!title) {
            return res.status(400).json({
                  error: "Title is required"
            });
      }

      const newTask = {
            id :tasks.length+1;
            title,
            completed : false
      }
      task.push(newTask);

      res.status(201).json({data: newTask})
})

app.delete("/tasks/:id", (req, res) => {
      const taskId = Number(req.params.id);

      const taskIndex = tasks.findIndex((t) => t.id === taskId);

      if (taskIndex === -1) {
            return res.status(404).json({
                  error: "Task not found"
            });
      }

      const deletedTask = tasks.splice(taskIndex, 1);

      res.status(200).json({
            message: "Task deleted successfully",
            task: deletedTask[0]
      });
});

app.listen(3000,()=> {
      console.log("Server Running On the Port:3000")
})