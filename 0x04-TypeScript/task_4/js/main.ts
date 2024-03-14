export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

export const teacher: Subjects.Teacher = {
  firstName: "Frank",
  lastName: "Ocean",
  experienceTeachingC: 10,
}

interface SubjectInterface {
  getRequirements(): string;
  getAvailableTeacher(): string;
}

function dodo(subject: SubjectInterface) {
  let msg = ""

  if (subject instanceof Subjects.Cpp) {
    msg = "C++"
  } else if (subject instanceof Subjects.React) {
    msg = "React"
  } else if (subject instanceof Subjects.Java) {
    msg = "Java"
  } else {
    throw new Error("Unknown subject")
  }

  subject.setTeacher = teacher;

  console.log(msg)
  console.log(subject.getRequirements())
  console.log(subject.getAvailableTeacher())
}

dodo(cpp)
