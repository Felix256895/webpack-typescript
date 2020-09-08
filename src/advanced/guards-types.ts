interface Padder1 {
  getPaddingString1(): number;
}
interface Padder2 {
  getPaddingString2(): string;
}


class SpaceRepeatingPadder implements Padder1 {
  constructor(private value: number) {

  }
  getPaddingString1() {
    return this.value;
  }
}

class StringPadder implements Padder2 {
  constructor(private value: string) {

  }
  getPaddingString2() {
    return this.value;
  }
}

function getRandomPadder() {
  let padder = Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('hello');
  if(padder instanceof SpaceRepeatingPadder) {
    padder.getPaddingString1();
  } else {
    padder.getPaddingString2();
  }
}

type Alias = {number: number};
interface Interface {
  number: number;
}
declare function Aliased(arg: Alias): Alias;
declare function Interfaced(arg: Interface): Interface;
