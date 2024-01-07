

export default function BoardComponent (props) {



                    // props로 넘겨 올 때 true, false로 나누고, 이를 삼항 연산자로 조건에 따라 표출 
    return(
        <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            제목: <input type="text" />
            내용: <input type="text" />
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </>

    )
}