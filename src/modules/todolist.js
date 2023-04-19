import Task from '../modules/task';
import Project from './project';
import Display from './display';

export default class TodoList {

  static initPage() {
    this.projects = [];
    this.projects.push(new Project('All'));

    Display.loadPage();

    console.log(this.projects);
  }

  static getProjects() {
    return this.projects;
  }

  static getProject(name) {
    return this.project.find((project) => project.name === name);
  }

  static addProject(name) {
    if (this.projects.find((project) => project.name === name)) return;
    this.projects.push(new Project(name));
  }

  static deleteProject(name) {
    let index = this.project.findIndex((project) => project.name === name);
    this.projects.splice(index, 1);
  }
}

