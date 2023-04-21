import formatRelative from 'date-fns/formatRelative'

export default class Task {
  // private static field stores next unique id
  static #nextid = -1;

  // private static method returns next unique id
  static #getNextId() {
    Task.#nextid++
    return Task.#nextid;
  }

  constructor (title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.id = Task.#getNextId();
    this.completed = false;
    this.priority = 1;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getFormattedDate() {
    return formatRelative(this.dueDate, new Date());
  }

  setCompleted(isCompleted) {
    this.completed = isCompleted;
  }







  

  


}