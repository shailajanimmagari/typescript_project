class Address {
    city: string;
    state: string;
    pincode: string;

    constructor(city: string, state: string, pincode: string) {
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
}

class Student {
    name: string;
    age: number;
    email: string;
    courseList: string[];
    address: Address;

    constructor(name: string, age: number, email: string, courseList: string[], address: Address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseList = courseList;
        this.address = address;
    }
}

const studentAddress = new Address("Sangareddy", "Telangana", "502269");
const student = new Student("Shailaja", 21, "shailu@gmail.com", ["Javascript", "Typescript"], studentAddress);

console.log(student);
