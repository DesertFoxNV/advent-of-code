import { Day1 } from './app/day-1/day-1';
import { Day2 } from './app/day-2/day-2';
import { Day3 } from './app/day-3/day-3';
import { Day4 } from './app/day-4/day-4';
import { Day5 } from './app/day-5/day-5';
import { Temp } from './app/core-js-imports/temp';

const days = [
  Day1,
  Day2,
  Day3,
  Day4,
  Day5,
];

for (const [i, v] of days.entries()) {
  console.log(`Day ${i + 1}`);
  console.log(' 1:', v?.puzzle1());
  if (v['puzzle2']) console.log(' 2:', v['puzzle2']());
}
