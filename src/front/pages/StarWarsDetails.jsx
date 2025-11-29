

export const StarWarsDetails = () => {

    return (
        <div className="container-fluid d-flex justify-content-center p-5">
            <div style={{ width: "90%", maxWidth: "900px", background: "black", border: "1px solid grey", borderRadius: "15px", overflow: "hidden", marginTop: "20px", color: "yellow", display: "flex", flexDirection: "row" }}>
                <img src="https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/1.jpg?raw=true" style={{ width: "45%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "20px", width: "55%" }}>
                    <h1 style={{ fontSize: "32px", margin: "0 0 15px 0" }}>Luke Skywalker</h1>
                    <p className="p-2" style={{ margin: "6px 0" }}><strong>Género:</strong> Male</p>
                    <p className="p-2" style={{ margin: "6px 0" }}><strong>Color de ojos:</strong> Blue</p>
                    <p className="p-2" style={{ margin: "6px 0" }}><strong>Color de pelo:</strong> Blond</p>
                    <p className="p-2" style={{ margin: "6px 0" }}><strong>Color de piel:</strong> Fair</p>
                    <p className="p-2" style={{ margin: "6px 0" }}><strong>Año de nacimiento:</strong> 19BBY</p>
                </div>
            </div>
        </div>
    );
};



