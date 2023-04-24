import { isToday, isThisWeek } from 'date-fns'

export default class Project {
  // private static field stores next unique id
  static #nextid = -1;

  // private static method returns next unique id
  static #getNextId() {
    Project.#nextid++
    return Project.#nextid;
  }

  constructor (name) {
    this.name = name;
    this.id = String(Project.#getNextId());
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}