import * as fs from 'fs';


export class Day5 {

  static parsePasses() {
    const passes = fs.readFileSync(`${__dirname}/day-5/passes.txt`, 'utf8')
      .split('\n')
      .filter(v => v);

    return passes.map(
      pass => {

        const col = pass.slice(7, 10)
          .split('').reduce(({ end, start }, v) => {
            return v === 'R' ? { start: Math.round((end + start) / 2), end } : { start, end: Math.floor((end + start) / 2) };
          }, { start: 0, end: 7 }).end;

        const row = pass.slice(0, 7)
          .split('').reduce(({ end, start }, v) => {
            return v === 'B' ? { start: Math.round((end + start) / 2), end } : { start, end: Math.floor((end + start) / 2) };
          }, { start: 0, end: 127 }).end;

        return { col, row, seat: row * 8 + col};
      }
    ).sort((a, b) => b.seat - a.seat);
  }

  static puzzle1() {
    return Day5.parsePasses()[0].seat;
  }

  static puzzle2() {
    const seats = this.parsePasses().map(v => v.seat);
    const opts = [];

    for(let i = 0; i < seats[0]; i++)
    {
      opts.push(!seats.includes(i) ? i : undefined)
    }

    return opts.filter(v =>v).find((v, i) => {
      return v !== i + 1
    })

  }
}
