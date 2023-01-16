const tasks = [];

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const fillTasks = () => {
    
    const task1 = new Task("Task 1", "This is the first task", "01/01/2022", "High");
    const task2 = new Task("Task 2", "This is the second task", "02/01/2022", "Low");
    const task3 = new Task("Task 3", "This is the third task", "03/01/2022", "Medium");

    // Add the tasks to the tasks array
    tasks.push(task1, task2, task3);
    console.log(tasks);
}

export { tasks, Task, fillTasks };

