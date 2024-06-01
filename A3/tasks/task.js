function updateStudent(student, update) {
    Object.keys(update).forEach(function (key) {
        if (key === 'name' || key === 'email') {
            student[key] = update[key];
        }
    });
    return student;
}
var student = {
    name: 'Shailaja',
    email: 'shailu@gmail.com'
};
var updatedInfo = {
    name: 'Meghana',
};
student = updateStudent(student, updatedInfo);
console.log(student);
var testStringValue = "Yes";
var testNumberValue = "No";
var testBooleanValue = "No";
console.log("Is 'string' a string:", testStringValue);
console.log("Is 'number' a string:", testNumberValue);
console.log("Is 'boolean' a string:", testBooleanValue);
// Example usage:
var lead = {
    name: "Meena Lead",
    id: 1,
    team: [
        { name: "Anu", id: 2 },
        { name: "Banu", id: 3 }
    ]
};
console.log("Lead:", lead.name);
console.log("Team members:");
for (var _i = 0, _a = lead.team; _i < _a.length; _i++) {
    var member = _a[_i];
    console.log(member.name);
}
function printLeadStatus(employees) {
    var leadStatuses = [];
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        var leadStatus = employee.isLead ? "Lead" : "not Lead";
        leadStatuses[leadStatuses.length] = employee.name + " is " + leadStatus;
    }
    return leadStatuses;
}
// Example usage:
var employees = [
    { name: "Sneha", id: 1, isLead: true },
    { name: "Rekha", id: 2, isLead: true },
    { name: "Sushma", id: 3, isLead: true }
];
var leadStatuses = printLeadStatus(employees);
console.log(leadStatuses.join('\n'));
