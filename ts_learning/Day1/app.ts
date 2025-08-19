//tsc --init , tsc --watch(to compile in realtime)


// Primitives and reference
//  [] {} () , value is reference...Any change that you make to the child it'll be reflected to the parent, if you change b , then a will be changed


// Basic types: Primitives,Arrays,Tuples,Enums,Any: Unknown,Void, Null,Undefined, Never


var a = true; //Primitive (can be copied)
var b  = [] //reference (cannot be directly copied)

function abcd(): void {
    let x: number = 12; // primitive
    let y: number = 22; // primitive

    let a = [1, 2, 3, 4, 5]; // reference type
    let b  = a;              // b references the same array as a, b depends on the value of a

    for (let index = 0; index < 200000; index++) {
        b.push(index);
    }
    console.log(a); 
}   

// Call the function
abcd();

//var, let, const.. Don't use var
let a2 = 12; // Variable described. a2 is number, it assigns automatically
let a3 = '';


let abcde = false; //boolean

let arr = [1,2,3,{name:" Allen"}] //hover over the arr part and you'll see the type. Here the type is string | number
let arr2 = [4,5,6,"Allen"];

// let arr3: number[]  = [1,3,4,5,6,"Allen"]; //Allen will throw error here because we defined the arr as number[]


let arr5: [string,number] = ["harsh",22];

//Enums:
enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}

let z: any;  //Any type , can be assigned anything
z = 20;
z = "machod";

// Diff bw any and unknown?
z.toUpperCase();  //You can do anything with any.

let y: unknown;
y = "whatever";
// y.toUpperCase(); WILL THROW ERROR

if(typeof y == "string" ) 
    y.toUpperCase() ;

function namee(): boolean{
    return true
}

let Allen: number |   null = null; //Null cannot be changed , so we do this union
Allen = 12.35;



// Infinite loop


// function loop(): never{  //never returns
//     while(true){}
// }

// loop()




// TYPE INFERENCE AND ANNOTATIONS
let aaaa: number | string | boolean; //this is annotating/allocating the type..