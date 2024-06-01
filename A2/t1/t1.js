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
    Student.prototype.getDetails = function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Email:", this.email);
        console.log("Courses:");
        for (var _i = 0, _a = this.courseList; _i < _a.length; _i++) {
            var course = _a[_i];
            console.log(" -", course);
        }
        console.log("Address:", this.address.city + ", " + this.address.state + ", " + this.address.pincode);
    };
    return Student;
}());
var studentAddress = new Address("sangareddy", "Telangana", "502269");
var student = new Student("shailaja", 21, "shailu@gmail.com", ["Javscript", "Typescript"], studentAddress);
student.getDetails();
