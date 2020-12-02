interface RegExpArrayWPuzzle1Group extends RegExpExecArray {
  groups: {
    min: string;
    max: string;
    char: string;
    password: string
  }
}

interface RegExpArrayWPuzzle2Group extends RegExpExecArray {
  groups: {
    pos1: string;
    pos2: string;
    char: string;
    password: string
  }
}
