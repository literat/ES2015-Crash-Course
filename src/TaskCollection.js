class TaskCollection {
    constructor(task = []) {
        this.task = task;
    }

    dump() {
        console.log(this.tasks);
    }
}

export let foo = 'bar';

export default TaskCollection;