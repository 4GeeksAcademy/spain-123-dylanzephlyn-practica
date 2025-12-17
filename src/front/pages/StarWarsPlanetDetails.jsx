import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const StarWarsPlanetDetails = () => {

  const { store } = useGlobalReducer();

  return (
    <div className="container-fluid d-flex justify-content-center p-5">
      <div style={{ width: "90%", maxWidth: "900px", background: "black", border: "1px solid grey", borderRadius: "15px", overflow: "hidden", marginTop: "20px", color: "yellow", display: "flex", flexDirection: "row" }}>
        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${store.currentPlanet.uid}.jpg?raw=true`} style={{ width: "45%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "20px", width: "55%" }}>
          <h1 style={{ fontSize: "32px", margin: "0 0 15px 0" }}>{store.currentPlanet.name}</h1>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Diameter: </strong> <span style={{ color: "white" }}>{store.currentPlanet.diameter} Km</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Terrain: </strong> <span style={{ color: "white" }}>{store.currentPlanet.terrain}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Climate: </strong> <span style={{ color: "white" }}>{store.currentPlanet.climate}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Year Length: </strong> <span style={{ color: "white" }}>{store.currentPlanet.orbital_period} days</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Population: </strong> <span style={{ color: "white" }}>{store.currentPlanet.population}</span></p>
          <Link to="/star-wars-planets">
            <button className="btn btn-outline-info btn-sm m-2">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
