import Task from '../modules/task';
import Project from '../modules/project';

export default class Display {

  static loadHomepage() {
    const content = document.querySelector('.content');
    content.innerHTML = "Hello";
  }
  
}