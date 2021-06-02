// console.log("helloWorld");


// var test = require("./second.js");

// test.f2();

// var assert = require("assert");

// var v1 = 10;
// var v2 = 10;
// var v3 = 30;

// assert(v1>v3);
// console.log("v1 < v3");


// var buf = Buffer.alloc(10);
// console.log(buf);

// //cluster 모듈 : 병렬 처리를 위해 제공되는 모듈 
// // 작업하나의 단위를 worker 이라함
// // cluster 모듈 생성후 fork 메서드를 호출하면 worker하나가 생성되며 필요한 만큼 worker을 생성해 병렬 처리하면됨
// // qhxhd cpu 코어 개수 만큼 worker를 발생시켜 병렬 처리함
// var cluster = require("cluster");

// // Round RObin 방식으로 스케쥴링
// cluster.schedulingPolicy = cluster.SCHED_RR;

// if (cluster.isMaster == true){

//     cluster.fork();
//     cluster.fork();
//     cluster.fork();

//     cluster.on('online', function(worker){
//         for (var i = 0 ; i < 10 ; i++){
//             console.log(worker.process.pid,"동작");
//         }
//     });
// }

// crypto 모듈 : 데이터 암호화 기능을 제공하는 모듈
// 현재 존재하는 대부분의 암호화 알고리즘을 지원하고 있음

// var crypto = require("crypto");
// getCiphers : 지원하는 암호화 알고리즘 이름 반환
// createCipher : 암호화용 객체 생성
// createDecipher : 복호화용 객체 생성
// update : 데이터를 암호화 하거나 복호화
// final : 암호화된 데이터 마지막 종료 블럭 추가

// var ciphers = crypto.getCiphers();
// for(var x of ciphers){
//     console.log(x);
// }

// var key = "test key";
// var data = "암호화 할 데이터";

// var cipher = crypto.createCipher("aes-256-cbc", key);
// var result = cipher.update(data, "utf-8", "base64");
// result += cipher.final("base64");

// console.log("암호화 문자열 : ", result);


//dns 모듈 : 지정된 도메인의 dns 정보를 알아올 수 있는 모듈
//지정된 도메인의 ip 주소 등의 정보를 파악할 수 있음
//look up: 지정된 도메인의 정보를 가져옴
// var dns = require("dns");
// dns.lookup("google.com",function(err,address,family){
//     console.log("IP 주소 :", address);
//     console.log("IP 버젼 :", family);
// });

// var op1 = {
//     family : 4
// };

// dns.lookup("google.com",op1,function(err,address,family){
//     console.log("IP 주소 v4:", address);
   
// });

// var op2 = {
//     family : 6
// };

// dns.lookup("google.com",op2,function(err,address,family){
//     console.log("IP 주소 v6:", address);
   
// });

//fs 모듈 : node.js에서 파일 작업 가능하게함
//wirteFIle : 비동기식으로 파일에 데이터씀, 기존데이터 삭제후 다시씀
//appendFile : 미동기식으로 파일에 데이터 씀 기존데이터에 데이터 추가
//readFile : 비동기 식으로 파일데이터 읽어옴
//writeFileSync : 동기식으로 파일 데이터 씀, 기존데이터 삭제후 다시씀
//appendFileSync : 동기식으로 파일 데이터 씀 기존데이터에 데이터 추가

// var fs = require("fs");
// fs.writeFile("data1.txt", "Hello node.js", function(error){
//     console.log("비동기 식 저장1");
// });

// fs.readFile("data1.txt", function(error,data){
//     console.log("data1 : ", data.toString());
// });

//Golbal 모듈 : node.js 에서 모듈 생성하지 않고 사용 할 수 있는 것들을 가지고있는 모듈 객체
//이 모듈은 프로그램 시작과 동시에 생성되며 어디서든 사용가능
// buffer : 메모리를 동적 할당 할 수 있는 모듈
// __dirname : 현재 실행중인 파일의 경로 
// __filename: 현재 실행중은 파일의 경로와 파일명
// setImmediate : 하나의 사건처리가 끝나면 동작할 코드 등록
// clearImmediate : 등록된 Immediate 제거

// console.log("__dirname : ", __dirname);
// console.log("__filename : ", __filename);

// console.log("node.js 코드입니다");
// setImmediate(function(){
//     console.log("Immediate 동작 1");
// })
// console.log("node.js 코드입니다");
// console.log("node.js 코드입니다");

// console.log("작업이 모두 완료되었습니다.")

// setInterval : 주어진 함수를 주어진 시간마다 계속 호출
// clearInterval : 등록된 Interval을 제거
// setTimeout : 주어진 함수를 주어진 시간후에 한번 호출
// clearTimeout : 등록된 Timeout을 제거
// console : 화면 출력
// exports : 개발자가 모듈을 만들 떄 사용하는 객체
// require : 모듈 객체를 만드는 함수

// os 모듈 : node.js 프로그램이 실행되고 있는 서버 컴퓨터와 관련된 정보를 제공
// arch : cpu 아키텍쳐 정보 , cpus : cpu 정보, totalmem : 총메모리 양, freemem : 여유 메모리양
// hostname : 컴퓨터의 호스트 이름 반환, networkInterfaces : 컴퓨터에 장착된 통신 장비 정보, platform : 실행 플랫폼의 정보 반환
// release : 버전 정보를 반환, temdir : 컴퓨터의 임시 폴더 경로를 반환, type : os 이름 반환, uptime, userInfo 등

// path 모듈 : 경로에 관련된 정보 제공
// var path = require("path");
// var basename1 = path.basename ("c:/abc/abc.txt");
// basename은 파일 이름만 dirname이 경로이름

