/**
 * 多态的this类型
 */
class BasicCalculator {
  public constructor(protected value: number = 0) {

  }
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

let v = new BasicCalculator(2).add(4).multiply(10).currentValue();
console.log(v);

class ScienceCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }
  public sin():this {
    this.value = Math.sin(this.value);
    return this;
  }
}
let s = new ScienceCalculator(2).multiply(10).sin().add(10).currentValue();
console.log(s);
