import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const nameref =useRef(null)
    const emailref =useRef(null)
    const passwordref=useRef(null)
    const [password,setpassword]=useState(null)
    const handlesubmit= e =>{
       
        e.preventDefault()
        if(passwordref.current.value.length < 6){
            setpassword('password must be 6 characters')
        }else{
            setpassword('')
        }
        console.log(nameref.current.value);
        console.log(emailref.current.value);
        console.log(passwordref.current.value);
        console.log(password);
    }
    useEffect(()=>{
        nameref.current.focus();
        emailref.current.focus();
        passwordref.current.focus()
    },[])
    return (
        <div>
           <form onSubmit={handlesubmit} >
            <input ref={nameref} type="text" name="name" className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />
            <input ref={emailref} defaultValue={'monira.programmer@gmail.com'} type="email"  name="email" className=" bg-gray-300 mt-4 py-2 p-2" />
            <br />
            <input ref={passwordref} type="password" name="password"className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />

            <input type="submit" value="submit" />
            {
                password && <p>{password}</p>
            }
        </form>  
        </div>
    );
};

export default RefForm;