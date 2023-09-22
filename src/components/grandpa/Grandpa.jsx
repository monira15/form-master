import Dad from "../Dad/Dad";
import Aunty from "../aunty/Aunty";
import Uncle from "../uncle/Uncle";
import './Grandpa.css'


const Grandpa = () => {
    return (
        <div className="grandpa ">
            <h2 className="text-2xl text-blue-900 font-bold">Grandpa</h2>
           <section className="flex">
           <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
           </section>
        </div>
    );
};

export default Grandpa;