//built in generics
//arrays
const names: Array<string>  = []  //same as string[]
//names[0].split("")

const promise: Promise<number> = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve(10)
    }, 2000)
})

promise.then(data=>{
    //data.split("")
    console.log(data);
})

///creating a generic function and constraints

function merge<T extends object, U extends object>(objA : T , objB : U ) {
    return Object.assign({}, objA, objB);
}

const mergeObj = merge(
    {
     name: 'Yukinon',
     hobbies :["Sports"]
    }, 
    {
      age:17
    });
console.log(mergeObj);


interface Lengthy{
    length :number
}

function countAndDescribe<T extends Lengthy>(element : T) : [T , string]{
    let descriptiontext = "Got no value. "
    if(element.length === 1){
        descriptiontext ="Got 1 element"
    }else if (element.length >1){
        descriptiontext = `Got ${element.length} elements`
    }
    return [element, descriptiontext]
}

console.log(countAndDescribe("Yukinon Yukinosshita"));
console.log(countAndDescribe(["Sports" , "Drinking"]));

//keyof  constraint

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U){
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name:"Yukinon"},"name"));


//generic classes

class DataStorage<T extends string | number | boolean>{
    private data : T[]= []

    addItem(item:T){
        this.data.push(item)
    }

    removeItem(item:T){
        if(this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Yukinon')
textStorage.addItem('Navia')
console.log(textStorage.getItems());
textStorage.removeItem('Navia')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>()
numberStorage.addItem(23)
numberStorage.addItem(55)
console.log(numberStorage.getItems());
numberStorage.removeItem(55)
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>()
// objStorage.addItem({name:'Yukinon',age:17})

// const ayaObj = {name:'Ayanokoji', age:17}
// objStorage.addItem(ayaObj)
// console.log(objStorage.getItems());
// objStorage.removeItem({name:'Ayanokoji', age:17})
// console.log(objStorage.getItems());

//Generic utility
//partial type
interface CourseGoal{
    title: string
    description : string
    completeUntil : Date
}


function createCourseeGoal ( 
    title: string , 
    description : string, 
    date : Date
    ):CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

//readonly type

const names1: Readonly<string[]> = ['yukinon', 'navia']
// names1.push("Raiden")
// names1.pop()
