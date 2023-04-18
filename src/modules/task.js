export default class Task {
  static nextid = 0;
  completed = false;

  constructor (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.id = nextid;
    nextid++;
  }

  getNextId() {
    return nextId;
  }

  


}