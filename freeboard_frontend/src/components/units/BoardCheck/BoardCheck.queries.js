

import { gql } from "@apollo/client"


export const FETCH_BOARD = gql `query fetchBoard($boardId:ID!){
  
  fetchBoard(boardId:$boardId) {
    
    _id
    writer
    title
    contents
    createdAt
               }
  }
`;



export const DELETE_BOARD = gql`mutation deleteBoard($boardId:ID!){
  
  deleteBoard(boardId: $boardId) 
}
`



export const CREATE_BOARD_COMMENT = gql `mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
  
  createBoardComment(
    
    createBoardCommentInput: $createBoardCommentInput, boardId: $boardId

    ) {
    
    _id
    writer
    rating
  }
}
`




export const FETCH_BOARD_COMMENTS = gql `query fetchBoardComments ($boardId: ID!) {
  
  fetchBoardComments(boardId:$boardId) {
    
    _id
    writer
    contents
    rating
    createdAt
  }
}
`




export const UPDATE_BOARD_COMMENT = gql `mutation updateBoardComment($updateBoardCommentInput:UpdateBoardCommentInput!, $password:String, $boardCommentId: ID!) {
  
  updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput,

            password: $password,
            boardCommentId: $boardCommentId

  ) {
    
    _id
    writer
    contents
    rating
    updatedAt
  }
}
`





export const DELETE_BOARD_COMMENT = gql `mutation deleteBoardComment($password:String, $boardCommentId:ID!) {
  
  deleteBoardComment(
    password: $password, boardCommentId: $boardCommentId
  )
}
`