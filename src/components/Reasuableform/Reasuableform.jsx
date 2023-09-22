/* eslint-disable react/prop-types */

// import {Children} from "react";

const Reasuableform = ({Children, handlesubmit,submittextbtn='Submit'}) => {
   const handleLocalsubmit =e =>{
    e.preventDefault();
    const data={
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value
    }
    handlesubmit(data)
   }
    return (
        <div>
            {Children}
            <form onSubmit={handleLocalsubmit} >
            <input type="text" name="name" className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />
            <input type="email"  name="email" className=" bg-gray-300 mt-4 py-2 p-2" />
            <br />
            <input type="password" name="password"className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />

            <input className="bg-gray-400 mt-4 px-6 py-1" type="submit" value={submittextbtn} />
        </form> 
        </div>
    );
};

export default Reasuableform;