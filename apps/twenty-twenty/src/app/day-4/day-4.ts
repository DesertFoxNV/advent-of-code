import * as fs from 'fs';
import { KEYS, RE_LIST, VALIDATOR_VALUES } from './day-4.constants';

export class Day4 {

  static parsePassports() {
    return fs.readFileSync(`${__dirname}/day-4/passport-ids.txt`, 'utf8')
      .replace(/\w\n\w/g, match => match.replace('\n', ' '))
      .split('\n')
      .filter(data => data && KEYS.every(key => data.includes(key)));
  }

  static puzzle1() {
    return Day4.parsePassports().length;
  }

  static puzzle2() {

    return Day4.parsePassports().map(data => {
      return RE_LIST.reduce((acc, re) => ({ ...acc, ...(re.exec(data) as RegExpArrayDay4Puzzle1)?.groups }),
        {} as PassportData);
    }).filter(v => {
      return VALIDATOR_VALUES.every(val => val(v));
    }).length;
  }
}
