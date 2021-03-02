import { Titration } from './app/titration/titration';

// const days = [
//   Day1,
//   Day2,
//   Day3,
//   Day4,
//   Day5,
// ];
//
// for (const [i, v] of days.entries()) {
//   console.log(`Day ${i + 1}`);
//   console.log(' 1:', v?.puzzle1());
//   if (v['puzzle2']) console.log(' 2:', v['puzzle2']());
// }
const titration = new Titration();
titration.simulate()
