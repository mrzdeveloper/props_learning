import Cars from "./Cars";
import { Carlist } from "./ApiCar";
const App = () => {
    return (<>
        {
            Carlist.map((p, index) => {
                return (
                    < Cars key={index} {...p} />
                )


            })
        }
    </>);
}

export default App;