import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameref =useRef(null)
    const emailref =useRef(null)
    const passwordref=useRef(null)
    const handlesubmit= e =>{
       
        e.preventDefault()
        console.log(nameref.current.value);
        console.log(emailref.current.value);
        console.log(passwordref.current.value);
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
            <input ref={emailref} type="email"  name="email" className=" bg-gray-300 mt-4 py-2 p-2" />
            <br />
            <input ref={passwordref} type="password" name="password"className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />

            <input type="submit" value="submit" />
        </form>  
        </div>
    );
};

export default RefForm;