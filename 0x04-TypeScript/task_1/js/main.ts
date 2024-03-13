interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [value: string]: any
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
  firstName: string;
  lastName: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => string;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working"
  }

  displayName() {
    return this.firstName
  }
}

const student = new StudentClass("Jake", "Archiebald")

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student.displayName())
console.log(student.workOnHomework())
