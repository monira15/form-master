import { useState } from "react";


const Statefullform = () => {
    const [name,setname]=useState(null)
    const [email,setemail]=useState(null);
    const [pasword,setpassword]=useState(null);
    const [error,seterror]=useState()
    const handlesubmit=e=>{
        e.preventDefault()
        if(handlePasswordChange.length<6){
            seterror('please fillup 6 characters')
        }
        else{
            seterror('')
        }
        console.log(name,email,pasword);
    }
    const handleNameChange = e =>{
        console.log(e.target.value);
        setname(e.target.value)

    }
    const handleEmailChange=e=>{
        console.log(e.target.value);
        setemail(e.target.value)
    }
    const handlePasswordChange=e =>{
        console.log(e.target.value);
        setpassword(e.target.value)
    }
    
    return (
        <div>
              <form onSubmit={handlesubmit} >
            <input
            onChange={handleNameChange}
            type="text" name="name" className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />
            <input 
            onChange={handleEmailChange}
            
            
            type="email"  name="email" className=" bg-gray-300 mt-4 py-2 p-2" required/>
            <br />
            <input
            onChange={handlePasswordChange}
            
            type="password" name="password"className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />

            <input type="submit" value="submit" />
            {
                error&&<p className="text-red-500">{error}</p>
            }
        </form>
        </div>
    );
};

export default Statefullform;