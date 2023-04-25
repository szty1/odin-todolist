import TodoList from './todolist';
import Display from './display';
import Project from './project';
import Task from './task';
import LocalStorage from './localstorage';

export default class Main {
  static todolist

  static init() {
    Main.todolist = new TodoList();

    // if (LocalStorage.hasTodoList()) {
    //   Main.todolist = LocalStorage.loadTodoList();
    // } else {
    //   Main.loadTestProjects();
    //   Main.loadTestTasks();
    // }

    Main.loadTestProjects();
    Main.loadTestTasks();

    Display.loadPage();

    console.log(LocalStorage.loadTodoList());
  }

  static loadTestProjects() {
    Main.todolist.addProject(new Project('Test Project'));
    Main.todolist.addProject(new Project('Another Test Project'));
    Main.todolist.addProject(new Project('And A Third One'));
  }

  static loadTestTasks() {
    Main.todolist.addTask(new Task('Test Task', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2023-04-20T08:00:00', false));
    Main.todolist.addTask(new Task('Test Task 2', 'Quisque feugiat vitae dui quis luctus. Quisque ac sagittis dolor.', '2023-04-21T08:00:00', true));
    Main.todolist.addTask(new Task('Test Task 3', 'Vivamus cursus a ex vitae bibendum. Etiam id justo vel sem eleifend consectetur.', '2023-04-28T08:00:00', false));

    Main.todolist.getTask('0').setProject('3');
    Main.todolist.getTask('1').setProject('4');
  }
}