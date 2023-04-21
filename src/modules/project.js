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
    this.tasks.set(String(task.id), task);
  }

  removeTask(id) {
    if (this.tasks.has(id)) {
      this.tasks.delete(id);
    }
  }
}