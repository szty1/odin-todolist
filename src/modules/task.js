import { format, formatRelative, toDate, parseISO } from 'date-fns'

export default class Task {
  // private static field stores next unique id
  static #nextid = -1;

  // private static method returns next unique id
  static #getNextId() {
    Task.#nextid++
    return Task.#nextid;
  }

  constructor (title, description, dueDate, important) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.id = String(Task.#getNextId());
    this.completed = false;
    this.important = important;
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

  getDueDateYYYYMMDD() {
    return format(this.dueDate, "yyyy-MM-dd");
  }

  setDueDate(dueDate) {
    this.dueDate = toDate(dueDate);
  }

  getFormattedDate() {
    return formatRelative(this.dueDate, new Date());
  }

  getCompleted() {
    return this.completed;
  }

  getImportant() {
    return this.important;
  }

  setImportant(important) {
    this.important = important;
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

  fixDate() {
    if (!(this.dueDate instanceof Date)) {
      this.dueDate = parseISO(this.dueDate);
    }
  }







  

  


}