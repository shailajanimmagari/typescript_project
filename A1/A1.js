var Address = /** @class */ (function () {
    function Address(city, state, pincode) {
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
    return Address;
}());
var Student = /** @class */ (function () {
    function Student(name, age, email, courseList, address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseList = courseList;
        this.address = address;
    }
    return Student;
}());
var studentAddress = new Address("Sangareddy", "Telangana", "502269");
var student = new Student("Shailaja", 21, "shailu@gmail.com", ["Javascript", "Typescript"], studentAddress);
console.log(student);
