import { Subject } from './Subject.js';
import { Observer } from './Observer.js';

console.log("teste");
const controlCheckbox = document.getElementById( "mainCheckbox" );
const addBtn = document.getElementById( "addNewObserver" );
const container = document.getElementById( "observersContainer" );

const mainSubject = Object.assign(controlCheckbox, new Subject());

console.log(mainSubject);

mainSubject.onclick = () => {
    console.log("click");
    mainSubject.notify(mainSubject.checked);
}

addBtn.onclick = addNewObserver;
 
// Concrete Observer
 
function addNewObserver(){
 
  var check = document.createElement( "input" );
  check.type = "checkbox";
 
  check.prototype = new Observer();

  check.update = function( value ){
    this.checked = value;
    console.log(this)
  };
 
  mainSubject.addObserver( check );
 
  container.appendChild( check );
  mainSubject.notify()
}