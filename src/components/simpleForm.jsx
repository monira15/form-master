

const SimpleForm = () => {
    const handlesubmit=e=>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
        console.log('form submint');
    }
    return (
        <div>
        {/* <form onSubmit={handlesubmit} >
            <input type="text" name="name" className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />
            <input type="email"  name="email" className=" bg-gray-300 mt-4 py-2 p-2" />
            <br />
            <input type="password" name="password"className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />

            <input type="submit" value="submit" />
        </form> */}
        </div>
    );
};

export default SimpleForm;