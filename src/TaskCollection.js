class TaskCollection {
    constructor(task = []) {
        this.task = task;
    }

    dump() {
        console.log(this.task);
    }
}

export let foo = 'bar';

export default TaskCollection;