function getData({ result, count }) {
    console.log(result, count);
}

getData({
    name: 'Karen',
    age: 32,
    result: ['foo', 'bar'],
    count: 50
});

function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age}.`);
}

greet({
    name: 'Luke',
    age: 24
});