import * as fs from 'fs';

export class Day3 {

  static findTrees(x: number, y: number) {
    const map = Day3.parseTreeMap();
    return new Array(map.length).fill(null)
      .map((v, i) => ([((i + 1) * x) % map[0].length, (i + 1) * y]))
      .reduce((acc, position, i) => {
        const [x, y] = position;
        return map?.[y]?.[x] === '#' ? acc + 1 : acc;
      }, 0);
  }

  static parseTreeMap() {
    return fs.readFileSync(`${__dirname}/day-3/tree-map.txt`, 'utf8')
      .split('\n')
      .filter(lines => lines)
      .map(line => line.split(''));
  }

  static puzzle1() {
    return Day3.findTrees(3, 1);
  }

  static puzzle2() {
    return [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2]
    ].map(([x, y]) => Day3.findTrees(x, y)).reduce((acc, v) => acc * v, 1);
  }
}
