
interface Student {
    name: string;
    age: number;
    grade: string;
}


type ReadonlyStudent = {
    readonly name: string;
    readonly age: number;
    readonly grade: string;
};


const student: ReadonlyStudent = {
    name: "Anusha",
    age: 21,
    grade: "A"
};


console.log(student);


type PartialStudent = Partial<Student>;
const partialStudent: PartialStudent = { name: "Keerthana" };
console.log(partialStudent);


type RequiredStudent = Required<Student>;
const requiredStudent: RequiredStudent = { name: "Shailaja", age: 21, grade: "B" };
console.log(requiredStudent);


type PickStudent = Pick<Student, "name" | "grade">;
const pickStudent: PickStudent = { name: "Sreeja", grade: "C" };
console.log(pickStudent);


type OmitStudent = Omit<Student, "age">;
const omitStudent: OmitStudent = { name: "Anjali", grade: "D" };
console.log(omitStudent);
