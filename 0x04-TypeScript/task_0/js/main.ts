interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class StudentFactory {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor({ firstName, lastName, age, location }: Student) {
    this.age = age;
    this.lastName = lastName;
    this.firstName = firstName;
    this.location = location;
  }
}


const s1 = new StudentFactory({ firstName: "James", lastName: "Bond", age: 40, location: "London" })
const s2 = new StudentFactory({ firstName: "Dean", lastName: "Winchester", age: 27, location: "Earth" })

const studensList = [s1, s2]

renderTable(studensList) // StudentFactory type structurally matches Student type

function renderTable(students: Student[]) {
  console.log("firstName  |  lastName  |  age  |  location")
  console.log("-----------------------------------------------");

  for (const st of students) {
    console.log(`${st.firstName}  ${st.lastName}  ${st.age}  ${st.location}`)
  }
}
