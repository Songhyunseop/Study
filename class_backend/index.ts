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

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기
const typeDefs = `#graphql

  #나만의 인풋 타입 => input 키워드로 만들기
  input MyBoard2 { 
    writer: String
    title: String
    contents: String
  }
  
  # 나만의 리턴 타입 => type 키워드로 만들기
  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(backend-example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend-practice 방식)
    createBoard(createBoardInput: MyBoard2!): String
  }
`;
// API 만들기
const resolvers = {
  Query: {
    fetchBoards: async (parent: any, args: any, context: any, info: any) => {
      // 모두 꺼내기
      const result = await Board.find();

      // 한개만 꺼내기
      // const result = await Board.findOne({
      //   where: { number: 3 },
      // });
      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // 하나 하나 모두 입력하는 비효율적인 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록에 성공했어요!!";
    },

    // updateBoard: async () => {
    //   // 3번 게시글을 영희로 바꿔줘!
    //   await Board.update({ number: 3 }, { writer: "영희" });
    // },

    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // 3번 게시글 삭제해줘!
    //   await Board.update({ number: 3 }, { isDeleted: true }); // 3번 게시글 삭제했다 치자! (소프트삭제) => isDeleted가 초기값인 false 이면? 삭제 안된거, true 이면? 삭제 된거
    //   await Board.update({ number: 3 }, { deletedAt: new Date() }); // 3번 게시글 삭제했다 치자! (소프트삭제) => deletedAt이 초기값인 NULL 이면? 삭제 안된거, new Date() 들어가 있으면? 삭제 된거
    // },
  },
};

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.201.140",
  port: 5025,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");

    startStandaloneServer(server).then(() => {
      console.log("그래프큐엘 서버가 실행되었습니다!!!"); // 포트: 4000
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
