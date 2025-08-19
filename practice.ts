type Student  = {
    name: String,
    age: number,
    email ?: String 
}

enum StudentStatus {
    PRESENT,
    ABSENT
}

class Classroom {
   private students: Map<string,Student> = new Map();
   private studentNumber: number = 0;

   private generateId(): number{
    return ++this.studentNumber;
   }


 public addStudent(name: string, card: Student): {success: boolean,id:number} {
    this.students.set(name,card);
    let idNumber = this.generateId();
    console.log(`The name of the student is: ${name} and the id of the student is ${idNumber}`);
    return {success: true,id: idNumber};
}

   public deleteStudent(name: string, id: number): boolean{
     try {
        this.students.delete(name);
        return true
     } catch (error) {
        return false
     } 
   }

//    If there is no element inside the map we get undefined
   public getStudent(name: string): Student | undefined{
    const student = this.students.get(name);
    if(student){
        console.log(`The name and age of the student is ${student.name}, ${student.age}`);
    } else {
        console.log(`The name of the student is: ${name} doesn't exist`);
    }
   
      return this.students.get(name);
   }
}


const classroom = new Classroom();
let student: Student = {
    name: "Abel",
    age: 15,
}

classroom.addStudent("Abel",student);
classroom.getStudent("Abel");


let student2: Student = {
    name: "Allen",
    age: 21,
}

classroom.addStudent("Allen",student2);
classroom.getStudent("Allen");

