import formatRelative from 'date-fns/formatRelative'

export default class Task {
  // private static field stores next unique id
  static #nextid = -1;

  // private static method returns next unique id
  static #getNextId() {
    Task.#nextid++
    return Task.#nextid;
  }

  constructor (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.id = Task.#getNextId();
    this.completed = false;
  }

  getFormattedDate() {
    return formatRelative(this.dueDate, new Date());
  }

  setCompleted(isCompleted) {
    this.completed = isCompleted;
  }







  

  


}