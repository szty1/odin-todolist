import { format, isValid, parseISO } from 'date-fns'

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
    this.dueDate = (isValid(parseISO(dueDate))) ? new Date(dueDate) : new Date();
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
    this.description = description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getDueDateYYYYMMDD() {
    return format(this.dueDate, "yyyy-MM-dd");
  }

  setDueDate(dueDate) {
    if (isValid(parseISO(dueDate))) {
      this.dueDate = parseISO(dueDate);
    } else {
      this.dueDate = new Date();
    }
  }

  getFormattedDate() {
    return format(this.dueDate, "MM/dd/yyyy");
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