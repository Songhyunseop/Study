
import axios from "axios"


export default function RestApi () {


    const ApiRequest = async () => {

        const data = await axios.get("https://koreanjson.com/users")

        console.log(data)
    }





    return(

        <div>
            <button onClick={ApiRequest}>Rest-API 요청하기</button>
        </div>

    )
}