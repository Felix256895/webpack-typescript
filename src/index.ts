
let str: string = 'hello world typescript';

const el = document.getElementById('root');

if(el) {
  el.innerHTML = str;
}
import './class.ts';

let obj: GlobalParams.Preson = {
  name: 'zhangsan',
  age: 20
}

console.log(obj);

const arr = [1, 2, 3, 4];
arr.map(item => {
  console.log(item);
})