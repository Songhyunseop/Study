
import {Button} from "../../../../../styles/emotion"


export default function ProductUI (props) {




    return(

     <div>
        판매자: <input type="text" onChange={props.aaa} /><br /><br />
        상품명: <input type="text" onChange={props.bbb} /><br /><br />
        상품내용: <input type="text" onChange={props.ccc} /><br /><br />
        상품가격: <input type="number" onChange={props.ddd} /><br /><br />
        <Button onClick={props.eee} visible={props.visible} >상품등록</Button>
     </div>
    )
}