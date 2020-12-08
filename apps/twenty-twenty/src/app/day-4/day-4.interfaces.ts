interface PassportData {
  byr?: string;
  cid?: string;
  ecl?: string;
  eyr?: string;
  hcl?: string;
  hgt?: string;
  iyr?: string;
  pid?: string;
}

interface RegExpArrayDay4Puzzle1 extends RegExpExecArray {
  groups: PassportData
}

interface HgtExecArray extends RegExpExecArray {
  groups: {
    value: string,
    units: string
  }
}

