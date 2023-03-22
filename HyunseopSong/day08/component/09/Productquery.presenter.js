


export default function ProductPresenter (props) {


    return(
        <>
        <div>{props.isEdit ? "수정하기" : "등록하기"}</div>
        판매자: <input type="text" onChange={props.sellerChange} ></input>
        상품명: <input type="text" onChange={props.productChange} ></input>
        세부정보: <input type="text" onChange={props.detailChange} ></input>
        가격: <input type="number" onChange={props.priceChange} ></input>
        <button onClick={props.isEdit ? props.EditBtn : props.CreateBtn} >상품{props.isEdit ? "수정" : "등록"}</button>
        </>
    )
}