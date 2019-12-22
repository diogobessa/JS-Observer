class ObserverList {

    constructor(){
        this.observerList = [];
    }
    
    add = obj => {
        return this.observerList.push(obj);
    }

    count = () => {
        return this.observerList.length;
    }

    get = index => {
        return this.observerList[index];
    }

}

class Subject {

    constructor(){
        this.observers = new ObserverList();
    }

    addObserver = () => {
        this.observers.add( observer );
    }

    removeObserver = observer => {
        this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    }
       
    notify = context => {
        const observerCount = this.observers.count();
        for(let i=0; i < observerCount; i++){
            this.observers.get(i).update( context );
        }
    }
}