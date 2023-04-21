import Task from '../modules/task';
import Project from './project';

export default class TodoList {

  constructor() { 
    this.projects = [];
  }

  getTask(id) {
    return this.getProject('All').find((task) => task.id === id)
  }

  addTask(task) {
    this.getProject('All').addTask(task);
  }

  deleteTask(id) {
    this.getProject('All').removeTask(id);
  }

  completeTask(id) {
    this.getProject('All').getTask(id).toggleCompleted();
  }

  editTask(id) {

  }

  getProjects() {
    return this.projects;
  }

  getProject(projectname) {
    return this.projects.find((project) => project.name === projectname);
  }

  addProject(projectname) {
    if (this.projects.find((project) => project.name === projectname)) return;
    this.projects.push(new Project(projectname));
  }

  deleteProject(projectname) {
    let index = Tthis.projects.findIndex((project) => project.name === projectname);
    this.projects.splice(index, 1);
  }

  getTodaysTasks() {
    const todaystasks = [];
    getProject('All').tasks.forEach((task, id, map) => {
      if (isToday(task.dueDate)) todaystasks.push(task);
    });
    return todaystasks;
  }

  getThisWeeksTasks() {
    const weekstasks = [];
    getProject('All').tasks.forEach((task) => {
      if (isThisWeek(task.dueDate)) weekstasks.push(task);
    });
    return weekstasks;
  }
}
