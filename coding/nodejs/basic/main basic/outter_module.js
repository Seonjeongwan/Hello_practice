//오픈소스 플랫폼으로 소스가 공개되어 있어 공유 모듈로 개발 편의 성 증가
// npm install <모듈이름>
// http://www.npmjs.com

var ArrayList = require("arraylist");

var list = new ArrayList;

list.add(100);
list.add(200);

var a1 = list.get(0);
var a2 = list.get(1);

console.log(a1);
console.log(a2);


//package.json 파일은 node.js 프로그램 개발시 사용하는 외부 모듈을 기록하고 한번에 설치할 수 있도록 관리하는 파일
//이 파일을 이클립스 프로젝트에서 만들어서 사용하면 외부 모듈을 사용할 수 있음
