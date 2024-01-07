

const classmates = [

    {name: "철수", age: 10, school: "토끼초등학교"},
    {name: "영희", age: 13, school: "다람쥐초등학교"},
    {name: "훈이", age: 11, school: "토끼초등학교"}

]



const result1 = classmates.filter( (val) => val.school==="토끼초등학교")
const result2 = classmates.filter( (val) => val.school==="다람쥐초등학교")




export default function Class () {


    return(

        <div>
            {result1.map( (val) => {

                val.candy = 10

                return <div>{JSON.stringify(val)}</div>
            } )}


            {result2.map( (val) => {

                val.name = "어린이"

                return <div>{JSON.stringify(val)}</div>
            } )}
        </div>
    )
}