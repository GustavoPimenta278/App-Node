const people = []

function createPerson (name, middleName, age) {
    const person = {
        name: name,
        middleName: middleName,
        fullName: `${name} ${middleName}`,
        age: age
    };

    function objectPerson () {
        return `FullName: ${person.fullName}; Age: ${person.age}`;

    };

    person.objectPerson = objectPerson();

    return people.push(person.objectPerson)
    
};

createPerson('Petter', 'Parker', 28)

createPerson('Penny', 'Parker', 16)
console.log(people)
