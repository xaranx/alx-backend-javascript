interface MajorCredit {
  credits: number;
  brand: "Major";
}
interface MinorCredit {
  credits: number;
  brand: "Minor";
}


function sumMajorCredit(subject1: MajorCredit, subject2: MajorCredit): MajorCredit["credits"] {
  return subject1.credits + subject2.credits;
}
function sumMinorCredit(subject1: MinorCredit, subject2: MinorCredit): MinorCredit["credits"] {
  return subject1.credits + subject2.credits;
}
