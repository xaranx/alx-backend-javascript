interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// just being fancy.. and DRY
interface TeacherInterface extends Omit<DirectorInterface, "workDirectorTasks"> {
  workTeacherTasks(): string;
}

type Employee = DirectorInterface | TeacherInterface;

type Subjects = "Math" | "History"

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home"
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }

  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home"
  }

  getCoffeeBreak(): string {
    return "Cannot get a break"
  }

  workTeacherTasks(): string {
    return "Getting to work"
  }
}

function createEmployee(salary: number | string): Employee {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher()
  }

  return new Director()
}

// Using a type predicate to perform type narrowing from helper function -- very sexy
function isDirector(employee: Employee): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined
}

function executeWork(employee: Employee) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks()
  } else {
    return employee.workTeacherTasks()
  }
}

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math"
  } else {
    return "Teaching History"
  }
}

console.log(teachClass("Math"))
console.log(teachClass("History"))
console.log(createEmployee(400))
console.log(createEmployee("400"))
console.log(createEmployee(600))
console.log(executeWork(createEmployee(400)))
console.log(executeWork(createEmployee(700)))
