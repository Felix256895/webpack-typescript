enum Type {
  strong,
  week
}

class Java {
  JavaRun() {
    console.log('Java Run');
  }
  java: any
}

class Js {
  JsRun() {
    console.log('Js Run');
  }
  js: any
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.strong ? new Java() : new Js();
  // 1 类型断言
  // if((lang as Java).JavaRun) {
    // return (lang as Java).JavaRun();
  // } else {
    // return (lang as Js).JsRun();
  // }
  // 2 类型保护 instanceof
  // if(lang instanceof Java) {
  //   lang.JavaRun();
  // } else {
  //   lang.JsRun();
  // }
  // 3 类型保护 in
  // if('java' in lang) {
  //   lang.JavaRun();
  // } else {
  //   lang.JsRun();
  // }
  // 4 类型保护 typeof
  // if(typeof x === 'string') {
  //   return x.length;
  // } else {
  //   return x.toFixed(2);
  // }
  if(isJava(lang)) {
    return lang.JavaRun();
  } else {
    return lang.JsRun();
  }
  return lang;
}
// 5 类型保护 
function isJava(lang: Java | Js): lang is Java {
  return (lang as Java).JavaRun !== undefined;
}

