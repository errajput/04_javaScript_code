function studentGradeSystem(totalMarks, obtainedMark, classAverage) {
  let passingCriteria = totalMarks * 0.5;
  let exceptionalCriteria = totalMarks * 0.8;
  let hasPassed = obtainedMark >= passingCriteria;
  let hasPerformed = obtainedMark >= exceptionalCriteria;
  let isAboveAverage = obtainedMark > classAverage;
  return {
    hasPassed,
    hasPerformed,
    isAboveAverage,
  };
}
const result = studentGradeSystem(500, 400, 350);
