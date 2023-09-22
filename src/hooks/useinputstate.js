import { useState } from "react"

const useInputState=(defaultvalue=null) =>{
    const [value,setvalue]=useState(defaultvalue);

    const onChange =e=>{
        setvalue(e.target.value)
    }
    // const handlechange =e=>{
    //     setvalue(e.target.value)
    // }
//     return [value,handlechange]
return{
    value,
    onChange
}
 }
export default useInputState