'use strict';

class TaskCollection {
    constructor(task = []) {
        this.task = task;
    }

    dump() {
        console.log(this.task);
    }
}

new TaskCollection([
    'Go to the store',
    'Finish screencast',
    'Eat cake'
]).dump();
