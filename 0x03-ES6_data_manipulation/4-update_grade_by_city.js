export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const cityStudents = students.filter((st) => st.location === city);

  if (!Array.isArray(newGrades)) {
    return cityStudents;
  }

  return cityStudents.map((st) => {
    for (let i = 0; i < newGrades.length; ++i) {
      if (st.id === newGrades[i].studentId) {
        return { ...st, grade: newGrades[i].grade };
      }
    }
    return { ...st, grade: 'N/A' };
  });
}
