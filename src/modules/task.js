import { formatRelative, toDate } from 'date-fns'

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
    this.project = null;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.title = title;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = toDate(dueDate);
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getFormattedDate() {
    return formatRelative(this.dueDate, new Date());
  }

  getCompleted() {
    return this.completed;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    if (!Number.isInteger(priority) || priority < 0 || priority > 4) return;
    this.priority = priority;
  }

  setCompleted(isCompleted) {
    this.completed = isCompleted;
  }

  getProject() {
    return this.project;
  }

  setProject(projectid) {
    this.project = projectid;
  }







  

  


}