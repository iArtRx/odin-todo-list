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
  const task1 = new Task(
    "Task 1",
    "This is the first task",
    "01/02/2023",
    "High"
  );
  const task2 = new Task(
    "Task 2",
    "This is the second task",
    "03/02/2023",
    "Low"
  );
  const task3 = new Task(
    "Task 3",
    "This is the third task",
    "02/02/2023",
    "Medium"
  );

  // Add the tasks to the tasks array
  tasks.push(task1, task2, task3);
};

export { tasks, Task, fillTasks };
