import { isToday, isThisWeek } from 'date-fns';
import Task from '../modules/task';
import Project from './project';

export default class TodoList {

  constructor() { 
    this.tasks = new Map;
    this.projects = new Map;

    this.addProject(new Project('All Tasks'));
    this.addProject(new Project('Due Today'));
    this.addProject(new Project('Due This Week'));
  }

  addProject(project) {
    this.projects.set(project.id, project);
  }

  getProject(id) {
    return this.projects.get(id);
  }

  deleteProject(id) {
    if (this.projects.has(id)) this.projects.delete(id);
  }

  getProjectsArray() {
    return Array.from(this.projects.values());
  }

  addTask(task) {
    this.tasks.set(task.id, task);
  }

  getTask(id) {
    return this.tasks.get(id);
  }

  deleteTask(id) {
    if (this.tasks.has(id)) this.tasks.delete(id);
  }

  getTasksArray() {
    return Array.from(this.tasks.values());
  }

  getTodayTasksArray() {
    const tasks = Array.from(this.tasks.values());
    return tasks.filter(task => isToday(task.getDueDate()));
  }

  getWeekTasksArray() {
    const tasks = Array.from(this.tasks.values());
    return tasks.filter(task => isThisWeek(task.getDueDate()));
  }

  getTasksInProjectArray(projectid) {
    const tasks = Array.from(this.tasks.values());
    return tasks.filter(task => task.getProject() == projectid);
  }
}
