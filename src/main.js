function getPerson() {
    let name = 'John';
    let age = 25;

    return {
        name,
        age,
        greet() {
            return `Hello, ${this.name}`
        }
    }
}

alert(getPerson().greet());