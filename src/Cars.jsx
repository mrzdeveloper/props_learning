
const Cars = (props) => {

    const { id, img, Name, type } = props;
    return (<>
        <div>
            <h1>{id}</h1>
            <h1>{img}</h1>
            <h1>{Name}</h1>
            <h1>{type}</h1>
        </div>

    </>);
}

export default Cars;