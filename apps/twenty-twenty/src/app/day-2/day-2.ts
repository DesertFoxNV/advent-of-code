import * as fs from 'fs';

const REG_EXP_PWD_PUZZLE_1 = /(?<min>\d+)-(?<max>\d+)\s(?<char>\w):\s(?<password>\w*)/;
const REG_EXP_PWD_PUZZLE_2 = /(?<pos1>\d+)-(?<pos2>\d+)\s(?<char>\w):\s(?<password>\w*)/;

export class Day2 {

  static parsePasswords() {
    return fs.readFileSync(`${__dirname}/day-2/passwords.txt`, 'utf8').split('\n').filter(v => v);
  }

  static puzzle1() {
    return Day2.parsePasswords().reduce((total, pwd) => {
      const { groups: { min, max, char, password } } = REG_EXP_PWD_PUZZLE_1.exec(pwd) as RegExpArrayWPuzzle1Group;
      const count = password.split('').filter(v => v === char).length;
      return count >= +min && count <= +max ? total + 1 : total;
    }, 0);
  }

  static puzzle2() {
    return Day2.parsePasswords().reduce((total, pwd) => {
      const { groups: { pos1, pos2, char, password } } = REG_EXP_PWD_PUZZLE_2.exec(pwd) as RegExpArrayWPuzzle2Group;
      const pos1Valid = char === password[+pos1 - 1];
      const pos2Valid = char === password[+pos2 - 1];
      return (pos1Valid || pos2Valid) && !(pos1Valid && pos2Valid) ? total + 1 : total;
    }, 0);
  }
}
