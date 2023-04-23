import TodoList from './todolist';
import Display from './display';
import Project from './project';
import Task from './task';

export default class Main {
  static todolist

  static init() {
    Main.todolist = new TodoList();
    Main.loadTestData();

    Display.loadPage();
  }

  static loadTestData() {
    Main.todolist.addProject(new Project('Test Project'));
    Main.todolist.addProject(new Project('Another Test Project'));
    Main.todolist.addProject(new Project('And A Third One'));

    Main.todolist.addTask(new Task('Test Task', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2023-04-20T08:00:00'));
    Main.todolist.addTask(new Task('Test Task 2', 'Quisque feugiat vitae dui quis luctus. Quisque ac sagittis dolor.', '2023-04-21T08:00:00'));
    Main.todolist.addTask(new Task('Test Task 3', 'Vivamus cursus a ex vitae bibendum. Etiam id justo vel sem eleifend consectetur.', '2023-04-28T08:00:00'));

    Main.todolist.getTask(0).setProject(3);
  }
}