'use strict';

var TaskCollection = function TaskCollection(task) {
    if ( task === void 0 ) task = [];

    this.task = task;
};

TaskCollection.prototype.dump = function dump () {
    console.log(this.tasks);
};

var foo = 'bar';

console.log(foo);

new TaskCollection([
    'Go to the store',
    'Finish screencast',
    'Eat cake'
]).dump();
