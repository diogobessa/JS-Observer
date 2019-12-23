import { Subject } from './Subject.js';
import { Observer } from './Observer.js';

console.log("teste");
const controlCheckbox = document.getElementById( "mainCheckbox" );
const addBtn = document.getElementById( "addNewObserver" );
const container = document.getElementById( "observersContainer" );

const mainSubject = new Subject();

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