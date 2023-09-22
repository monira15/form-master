import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import Myself from "../myself/Myself";



const Dad = () => {
    return (
        <div>
           <h2>Dad</h2> 
           <section className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
       
           </section>
        </div>
    );
};

export default Dad;