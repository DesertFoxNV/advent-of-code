import {readFileSync} from 'fs';
import { exec, execFileSync, execSync, spawn } from 'child_process';


export class Temp {

  static parseImports() {
    return readFileSync(`${__dirname}/temp/imports.txt`, 'utf8')
      .split('\n')
      .filter(v => v)
      .map(v => /s\/(?<file>\S+)'\);/.exec(v))
      .map(v => v['groups'].file)
      .map(v => `"core-js/modules/${v}"`)
      .join(',\n')
  }

  static puzzle1() {
    const data = Temp.parseImports();
    console.log(data);
    exec(`echo "${data}" | xclip -selection clipboard`,
      function(err, stdout, stderr) {
        console.log(stdout); // to confirm the application has been run
      }
    );
  }

  static puzzle2() {
    return '';
  }
}
