import * as fs from 'fs';

export class Day1 {

  static parseReport() {
    return fs.readFileSync(`${__dirname}/day-1/expense-report.txt`, 'utf8')
      .split('\n')
      .filter(v => v)
      .map(v => parseInt(v));
  }

  static puzzle1() {
    const report = Day1.parseReport();
    let product = 0;

    report.map(x => {
      report.map(y => {
        if (x + y === 2020) product = x * y;
      });
    });

    return product;
  }

  static puzzle2() {
    const report = Day1.parseReport();
    let product = 0;

    report.map(x => {
      report.map(y => {
        report.map(z => {
          if (x + y + z === 2020) product = x * y * z;
        });
      });
    });

    return product;
  }
}
