import Task from '../modules/task';
import Project from './project';

export default class TodoList {

  constructor() { 
    this.projects = [];
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

  addTaskToProject(task, projectname) {
    this.getProject(projectname).addTask(task);
  }
}
