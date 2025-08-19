//Objects as parameters
function printCoord(pt: {x: number; y: number}){
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is: " + pt.y);
}

printCoord({x:4,y: 8});

// Optional properties:

function printName(obj: {first: string; last?: string}){
    console.log();
}

// Both ok
printName({first: "Allen"});
printName({first: "Allen", last: "George"});

//Union Types
function printId(id: number | string){

    if (typeof id == "string") {
        console.log(id.toUpperCase());
    } else{
        console.log("Your Id is: " + id);
    }
   
}

printId(202);
printId("202");



// Narrowing
function typeofNarrowing(input: string | number | boolean | object) {
    if (typeof input === "string") {
        // input is string
        console.log(input.charAt(0));
    } else if (typeof input === "number") {
        // input is number
        console.log(input.toFixed());
    } else if (typeof input === "boolean") {
        // input is boolean
        console.log(input ? "true" : "false");
    } else {
        // input is object (including arrays, null, etc.)
        console.log(Object.keys(input));
    }
}

function welcomePeople(x: string[] | string){
    if (Array.isArray(x)){
        console.log("Hello, " + x.join(" and "));
    } else{
        console.log("Welcome lone traveller" + x);
    }
}

// If a property in the type inferrence has something in common, you don't have to narrow down
function getFirstThree(x: number[] | string){
    return x.slice(0,2);
}


// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// You can return multiple literal types
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0: a>b ? 1:-1;
}


// Numeric enums members also get a reverse mapping from enum values to enum names. For example
// An enum is compiled into an object that stores both forward (name -> value) and reverse (value -> name) mappings
enum Enum {
    A,
}

// let a = Enum.A;
// let nameOfA = Enum[a]; //"A"


// const enum Enumm {
//     A  = 1,
//     B = A*2
// }

// declare enum Enum {
//     A = 1,
// }


// Narrowing using "in" operator

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function move(animal: Fish | Bird){
    if("swim" in animal){
        return animal.swim();
    }

    return animal.fly();
}


function logValue(x: Date | string) {
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

