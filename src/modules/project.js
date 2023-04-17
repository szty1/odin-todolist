export default class Project {
  tasks = new Map();

  constructor (name) {
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id) {
    return this.tasks.get(id);
  }

  addTask(task) {

  }

  deleteTask(id) {
    if (this.tasks.has(id)) {
      this.tasks.delete(id);
    }
  }

  getTodayTasks {

  }

  getThisWeekTasks {

  }
}