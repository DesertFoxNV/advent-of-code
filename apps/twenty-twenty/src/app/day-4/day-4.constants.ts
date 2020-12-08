const RE_BYR = /(?:byr:(?<byr>\d{4}))/;
const RE_IYR = /(?:iyr:(?<iyr>\d{4}))/;
const RE_EYR = /(?:eyr:(?<eyr>\d{4}))/;
const RE_HGT = /(?:hgt:(?<hgt>\w+))/;
const RE_HCL = /(?:hcl:(?<hcl>#[0-9a-f]{6}))/;
const RE_ECL = /(?:ecl:(?<ecl>amb|blu|brn|gry|grn|hzl|oth))/;
const RE_PID = /(?:pid:(?<pid>\d+))/;

export const RE_LIST = [
  RE_BYR,
  RE_IYR,
  RE_EYR,
  RE_HGT,
  RE_HCL,
  RE_ECL,
  RE_PID
];

export const KEYS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

export const VALIDATORS: { [key: string]: (PassportData) => boolean } = {
  byr: ({ byr }) => +byr >= 1920 && +byr <= 2002,
  iyr: ({ iyr }) => +iyr >= 2010 && +iyr <= 2020,
  eyr: ({ eyr }) => +eyr >= 2020 && +eyr <= 2030,
  hgt: ({ hgt }) => {
    const groups = (/(?<value>\d+)(?<units>cm|in)/.exec(hgt) as HgtExecArray)?.groups;
    if (!groups) return false;
    const { units, value } = groups;
    if (units === 'cm') {
      return +value >= 150 && +value <= 193;
    } else {
      return +value >= 59 && +value <= 76;
    }
  },
  hcl: ({ hcl }) => /^#[0-9a-f]{6}$/.test(hcl),
  ecl: ({ ecl }) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
  pid: ({ pid }) => pid?.length === 9
};

export const VALIDATOR_VALUES = Object.values(VALIDATORS);
