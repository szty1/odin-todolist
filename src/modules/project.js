import { isToday, isThisWeek } from 'date-fns'

export default class Project {
  tasks = new Map();

  constructor (name) {
    this.name = name;
  }

  getTasks() {
    return Array.from(this.tasks.values());
  }

  getTask(id) {
    return this.tasks.get(id);
  }

  addTask(task) {
    this.tasks.set(task.id, task);
  }

  deleteTask(id) {
    if (this.tasks.has(id)) {
      this.tasks.delete(id);
    }
  }

  getTodaysTasks() {
    const todaystasks = [];
    this.tasks.forEach((task, id, map) => {
      if (isToday(task.dueDate)) todaystasks.push(task);
    });
    return todaystasks;
  }

  getThisWeeksTasks() {
    const weekstasks = [];
    this.tasks.forEach((task) => {
      if (isThisWeek(task.dueDate)) weekstasks.push(task);
    });
    return weekstasks;
  }
}