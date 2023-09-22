import useInputState from "./useinputstate";


const HookForm = () => {
    // const [name,handleNameChange]=useInputState('rojoni')
    const emailstate =useInputState('rojoni@sojoni.com')
    const handlesubmit =e =>{

       console.log('form data',emailstate.value);
        e.preventDefault ();

    }
    return (
        <div>
            <form onSubmit={handlesubmit} >
            {/* <input  value={name} onChange={handleNameChange} type="text"  name="name" className=" bg-gray-300 mt-4 py-2 p-2"/> */}
            <br />
            <input {...emailstate} type="email"  name="email" className=" bg-gray-300 mt-4 py-2 p-2" />
            <br />
            <input type="password" name="password"className=" bg-gray-300 mt-4 py-2 p-2"/>
            <br />

            <input type="submit" value="submit" />
        </form>
        </div>
    );
};

export default HookForm;