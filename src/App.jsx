import Cars from "./Cars";
import { Carlist } from "./ApiCar";
const App = () => {
    return (<>
        {
            Carlist.map((car, index) => {
                return (
                    < Cars key={index} car={car} />
                )


            })
        }
    </>);
}

export default App;