import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
                <Cousin  name={'rafsan'}></Cousin>
                <Cousin  name={'rattri'}></Cousin>
              
            </section>
        </div>
    );
};

export default Uncle;