// TASK-1
interface Student {
    name: string;
    email: string;
    
}

type UpdateStudent = Partial<Student>;

function updateStudent(student: Student, update: UpdateStudent): Student {
    
    Object.keys(update).forEach(function(key) {
        
        if (key === 'name' || key === 'email') {
          
            student[key] = update[key] as string;
        }
    });

    return student;
}



let student: Student = {
    name: 'Shailaja',
    email: 'shailu@gmail.com'
};

let updatedInfo: UpdateStudent = {
    name: 'Meghana',

};

student = updateStudent(student, updatedInfo);

console.log(student);
// TASK-2
type IsString<T> = T extends string ? "Yes" : "No";

type TestString = IsString<string>; // Yes
type TestNumber = IsString<number>; // No
type TestBoolean = IsString<boolean>; // No

const testStringValue: TestString = "Yes";
const testNumberValue: TestNumber = "No";
const testBooleanValue: TestBoolean = "No";

console.log("Is 'string' a string:", testStringValue); 
console.log("Is 'number' a string:", testNumberValue); 
console.log("Is 'boolean' a string:", testBooleanValue); 

// TASK-3

interface Employee {
    name: string;
    id: number;
}


interface Lead extends Employee {
    team: Employee[];
}

// Example usage:
const lead: Lead = {
    name: "Meena Lead",
    id: 1,
    team: [
        { name: "Anu", id: 2 },
        { name: "Banu", id: 3 }
    ]
};

console.log("Lead:", lead.name);
console.log("Team members:");
for (const member of lead.team) {
    console.log(member.name);
}
//TASK-4


interface Employee {
    name: string;
    id: number;
    isLead?: boolean; 
}


function printLeadStatus(employees: Employee[]): string[] {
    const leadStatuses: string[] = [];

    for (const employee of employees) {
        const leadStatus = employee.isLead ? "Lead" : "not Lead";
        leadStatuses[leadStatuses.length] = employee.name + " is " + leadStatus;
    }

    return leadStatuses;
}


const employees: Employee[] = [
    { name: "Sneha", id: 1, isLead: true },
    { name: "Rekha", id: 2 , isLead: true },
    { name: "Sushma", id: 3, isLead: true }
];

const leadStatuses = printLeadStatus(employees);
console.log(leadStatuses.join('\n'));
