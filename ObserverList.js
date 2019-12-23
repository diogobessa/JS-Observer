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

export { ObserverList };