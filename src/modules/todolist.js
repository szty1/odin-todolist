import { isToday, isThisWeek } from 'date-fns';
import Task from '../modules/task';
import Project from './project';
import LocalStorage from './localstorage';

export default class TodoList {

  constructor() { 
    this.tasks = [];
    this.projects = [];

    this.projects.push(new Project('All Tasks'));
    this.projects.push(new Project('Due Today'));
    this.projects.push(new Project('Due This Week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getCustomProjects() {
    return this.projects.slice(3);
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  addProject(project) {
    this.projects.push(project);
    LocalStorage.saveTodoList(this);
  }

  createNewProject(projectname) {
    this.addProject(new Project(projectname));
  }

  getProject(id) {
    return this.projects.find(project => project.id == id);
  }

  hasProject(id) {
    return (this.projects.findIndex(project => project.id == id) >= 0);
  }

  deleteProject(id) {
    if (this.hasProject(id)) {
      this.projects.splice(this.projects.findIndex(project => project.id == id), 1);
      LocalStorage.saveTodoList(this);
    }
  }

  addTask(task) {
    this.tasks.push(task);
    LocalStorage.saveTodoList(this);
  }

  getTask(id) {
    return this.tasks.find(task => task.id == id);
  }

  hasTask(id) {
    return (this.tasks.findIndex(task => task.id == id) >= 0);
  }

  deleteTask(id) {
    if (this.hasTask(id)) {
      this.tasks.splice(this.tasks.findIndex(task => task.id == id), 1);
      LocalStorage.saveTodoList(this);
    }
  }

  addNewTask(form) {
    this.addTask(new Task(form.title.value, form.description.value, form.duedate.value, false));
    LocalStorage.saveTodoList(this);
  }

  updateTask(form) {
    const task = this.getTask(Number(form.taskid.value));
    task.setTitle(form.title.value);
    task.setDescription(form.description.value);
    task.setDueDate(form.duedate.value);
    if (this.hasProject(Number(form.project.value))) {
      task.setProject(Number(form.project.value));
    }
    else {
      task.setProject(null);
    }
    LocalStorage.saveTodoList(this);
  }

  getTodayTasks() {
    return this.tasks.filter(task => isToday(task.getDueDate()));
  }

  getWeekTasks() {
    return this.tasks.filter(task => isThisWeek(task.getDueDate()));
  }

  getTasksInProject(projectid) {
    return this.tasks.filter(task => task.getProject() == projectid);
  }

  getTaskProjectName(id) {
    const projectid = this.getTask(id).getProject();
    return (this.hasProject(projectid)) ? this.getProject(projectid).getName() : false;
  }

  toggleImportant(id) {
    this.getTask(id).setImportant(!this.getTask(id).getImportant());
    LocalStorage.saveTodoList(this);
  }

  toggleCompleted(id) {
    this.getTask(id).setCompleted(!this.getTask(id).getCompleted());
    LocalStorage.saveTodoList(this);
  }
}
