import TodoList from "./todolist";
import Project from "./project";
import Task from "./task";

export default class LocalStorage {

  static hasTodoList() {
    return (window.localStorage.todolist != null);
  }

  static saveTodoList(todolist) {
    window.localStorage.todolist = JSON.stringify(todolist);
  }

  static loadTodoList() {
    if (window.localStorage.todolist) {
      const todolist =  Object.assign(new TodoList(), JSON.parse(window.localStorage.todolist));

      todolist.setProjects(todolist.getProjects().map(project => Object.assign(new Project(), project)));

      todolist.setTasks(todolist.getTasks().map(task => Object.assign(new Task(), task)));

      todolist.getTasks().forEach(task => task.fixDate());

      return todolist;
    } else {
      return null;
    } 
  }
}