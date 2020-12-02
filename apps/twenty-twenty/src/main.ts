import { Day1 } from './app/day-1/day-1';
import { Day2 } from './app/day-2/day-2';

const days = [
  Day1,
  Day2
];

for (const [i, v] of days.entries()) {
  console.log(`Day ${i + 1}`);
  console.log(' 1:', v.puzzle1());
  console.log(' 2:', v.puzzle2());
}
