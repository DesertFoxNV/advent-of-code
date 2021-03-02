import * as chalk from 'chalk';

export class Titration {
  luxRange = {
    start: Math.round((Math.random() * (2700 - 1500)) + 1500),
    end: Math.round((Math.random() * (700 - 400)) + 400),
  };
  nacnGramsPerLiter = parseFloat(Math.random().toFixed(2));
  nacnGramsPerLiterMax = 1;
  nacnGramsPerLiterTest = this.nacnGramsPerLiterMax / 2;
  nacnLimit = {
    bottom: 0,
    top: this.nacnGramsPerLiterMax
  };

  get lux()
  {
    const midpoint = (this.luxRange.end + this.luxRange.start)/2;
    const difference = this.nacnGramsPerLiterTest - this.nacnGramsPerLiter;
    const m = - (this.luxRange.end - this.luxRange.start)/(-0.2 - 0.2);
    if(difference <= 0.2 && difference > 0)
    {
      return m * difference + midpoint;
    } else if(difference < 0 && difference >= -0.2) {
      const m = - (this.luxRange.start - this.luxRange.end)/(0 - 0.4);
      return  m * difference + midpoint;
    } else if(this.nacnGramsPerLiterTest === this.nacnGramsPerLiter) {
      return midpoint;
    }else if(this.nacnGramsPerLiterTest > this.nacnGramsPerLiter) {
      return this.luxRange.end;
    } else
    {
      return this.luxRange.start;
    }
  }

  async simulate() {
    let iterations = 1;
    const testedConcentrations = [];

    console.log(chalk.magenta(`${this.nacnGramsPerLiter.toFixed(2)} gNaCN/L`));
    console.log(chalk.magenta(`Lux high: ${this.luxRange.start}`));
    console.log(chalk.magenta(`Lux midpoint: ${(this.luxRange.end + this.luxRange.start)/2}`));
    console.log(chalk.magenta(`Lux low: ${this.luxRange.end}`));

    while (+this.nacnLimit.top - +this.nacnLimit.bottom > 0.06) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000)
      })
      const isConcGreater = this.nacnGramsPerLiter > this.nacnGramsPerLiterTest;
      console.log(chalk[isConcGreater ? 'green' : 'red'](
        `${isConcGreater ? 'Higher' : 'Lower'} ${this.nacnGramsPerLiterTest.toFixed(2)} gNaCN/L (Lux: ${this.lux.toFixed(0)})`));
      testedConcentrations.push(this.nacnGramsPerLiter);

      if (isConcGreater) {
        this.nacnLimit.bottom = +this.nacnGramsPerLiterTest;
        this.nacnGramsPerLiterTest = ((this.nacnLimit.top + this.nacnLimit.bottom) / 2);
      } else {
        this.nacnLimit.top = +this.nacnGramsPerLiterTest;
        this.nacnGramsPerLiterTest = ((this.nacnLimit.top + this.nacnLimit.bottom) / 2);
      }

      this.nacnGramsPerLiterTest = parseFloat((Math.ceil(this.nacnGramsPerLiterTest * 20) / 20).toFixed(2));
      iterations = iterations + 1;
    }

  }

}
