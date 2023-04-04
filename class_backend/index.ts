// const qqq: string = "안녕하세요!!";

// console.log(qqq);

// node 명령어는 js를 실행하는 프로그램

// ts는 타입스크립트 언어, js와는 다른 개념으로서 node 로 실행이 불가능 (실행하는 프로그램이 다름!!)
// ts 실행프로그램 => [ts node]
//
//
//
// BUT => ts node 설치 후 ts-node 명령어로 index.ts 파일을 실행하면 "command not found" 에러 발생 (ts node는 현재 고작 class_backend 폴더 상에만 설치 되어있기 때문 [컴퓨터 전역에 설치된 node.js 와는 다름!]) - (전역에서 찾을 수 없기 때문에 command[명령어]를 찾지 못하는 오류가 발생하는 것!!)
// 따라서 인식을 못하기 때문에 다른 방법을 취해야 하는데 그 중 한가지 방법 1 => [ package.json "scripts" 안에 새로운 명령어를 넣고 실행 문구로 "ts-node index.js" 입력 (이 경우 실행하면 ts-node 명령어를 로컬컴퓨터 전역에서 찾는 것이 아닌 node-modules 에서 찾기 때문에 "command not found" 에러가 발생하지 않음!!) ]

import { DataSource } from "typeorm";
import { Board } from "./Board.table";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.201.140",
  port: 5008,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

// initialize (초기화 작업)
AppDataSource.initialize()
  .then(() => {
    console.log("DB 접속에 성공!!");
  })
  .catch((error) => {
    console.log("DB 접속 실패!!");
    console.log("원인", error);
  });
