type PersonDetails = {
    firstName: string,
    lastName: string,
    age: number,
    isMale?: boolean
}

function greet(greeting: string):string {
    return `hello, ${greeting}`;
}

function greetObj({ firstName, lastName, age, isMale }: PersonDetails) : string {
    return `${firstName} ${lastName} is a ${age} year old ${isMale ? 'male' : 'female'}`;
};

const withString:string = greet('Max');
const withObj:string = greetObj({ firstName: 'Max', lastName: 'Kendall', age: 30, isMale: true });

console.log(
    greetObj({ firstName: 'Max', lastName: 'Kendall', age: 30 })
)
