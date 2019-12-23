import { ObserverList } from './ObserverList.js';

class Subject {

    constructor(){
        console.log("subject load");
        this.observers = new ObserverList();
        console.log("new subject");
    }

    addObserver = observer => {
        this.observers.add( observer );
    }

    removeObserver = observer => {
        this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    }
       
    notify = context => {
        console.log(this.observers);
        this.observers.observerList.forEach( observer => observer.update(context));    
    }
}

export { Subject };