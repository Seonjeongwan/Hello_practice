//이제 Express.js 프레임워크로 웹앱을 정의

'use strict'; //기존의 자바스크립트 코드에 대해 좀 더 엄격한 검사를 실행

const express = require('express');  //다른 변수를 할당하듯이 모듈을 불러옴

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => { //화살표 함수 간단히 함수를 표현
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);