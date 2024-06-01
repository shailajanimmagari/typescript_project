class Address {
    constructor(
        public city: string,
        public state: string,
        public pincode: string
    ) {}
}

class Student {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public courseList: string[],
        public address: Address
    ) {}

    getDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Email:", this.email);
        console.log("Courses:");
        for (const course of this.courseList) {
            console.log(" -", course);
        }
        console.log("Address:", this.address.city + ", " + this.address.state + ", " + this.address.pincode);
    }
}


const studentAddress = new Address("sangareddy", "Telangana", "502269");
const student1 = new Student("shailaja", 21, "shailu@gmail.com", ["Javscript", "Typescript"], studentAddress);

student1.getDetails();
