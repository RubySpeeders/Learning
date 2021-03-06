// Code goes here!
// const names: Array<string> = ['Mandy', 'Sarah'] // string[]
// //  names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         resolve('This is done!');
//     }, 2000)
// })

// promise.then(data=>{data.split(' ')})

function merge <T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 30});

console.log(mergedObj.age);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['sports', 'music']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(extractAndConvert({name: 'Sarah'}, 'name'));

class DataStorage <T extends string | number | boolean>{
    private data: T[] = [];
    
    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Mandy');
textStorage.addItem('Sarah');
textStorage.removeItem('Sarah');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
//  const objStorage = new DataStorage<object>();

//  objStorage.addItem({name: 'Mandy'})
//  objStorage.addItem({name: 'Sarah'})
//  //...
//  objStorage.removeItem({name: 'Mandy'});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description= description;
    courseGoal.completeUntil = date
return courseGoal as CourseGoal

}

const names: Readonly<string[]> = ['Mandy', 'Sarah'];
// names.push('Israel');


const nameObj = {name: "Sarah"}
const hobbies = {hobbies: ["sleeping"]}

const newObject = Object.assign({}, nameObj, hobbies)
console.log(newObject === nameObj)


const otherNewObject = {...nameObj, ...hobbies}
console.log(otherNewObject)