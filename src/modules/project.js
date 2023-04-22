import { isToday, isThisWeek } from 'date-fns'

export default class Project {
  // private static field stores next unique id
  static #nextid = -1;

  // private static method returns next unique id
  static #getNextId() {
    Project.#nextid++
    return Task.#nextid;
  }

  constructor (name) {
    this.name = name;
    this.id = Project.#getNextId();
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  // getTasks() {
  //   return Array.from(this.tasks.values());
  // }

  // getTask(id) {
  //   return this.tasks.get(id);
  // }

  // addTask(task) {
  //   this.tasks.set(String(task.id), task);
  // }

  // removeTask(id) {
  //   if (this.tasks.has(id)) {
  //     this.tasks.delete(id);
  //   }
  // }
}