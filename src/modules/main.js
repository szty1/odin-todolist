import TodoList from './todolist';
import Display from './display';
import Task from './task';
import Project from './project';

export default class Main {
  static todolist

  static init() {
    Main.todolist = new TodoList();
    Main.todolist.addProject('All');
    Main.loadTestData();

    Display.loadPage();
  }


  static loadTestData() {
    Main.todolist.addTaskToProject(new Task('test', 'test', '2023-04-20T08:00:00', 1), 'All');
    Main.todolist.addTaskToProject(new Task('test2', 'test3', '2023-04-21T08:00:00', 2), 'All');
    Main.todolist.addTaskToProject(new Task('test3', 'test3', '2023-04-28T08:00:00', 3), 'All');
  }
}