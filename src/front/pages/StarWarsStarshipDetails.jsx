import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const StarWarsStarshipDetails = () => {

  const { store } = useGlobalReducer();
  const handleImageError = (event) => {
    event.target.src = 'https://i0.wp.com/lelandswallpaper.com/wp-content/uploads/woocommerce-placeholder.png?fit=500%2C500&ssl=1'
  }

  return (
    <div className="container-fluid d-flex justify-content-center p-5">
      <div style={{ width: "90%", maxWidth: "900px", background: "black", border: "1px solid grey", borderRadius: "15px", overflow: "hidden", marginTop: "20px", color: "yellow", display: "flex", flexDirection: "row" }}>
        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${store.currentStarship.uid}.jpg?raw=true`} onError={handleImageError} style={{ width: "45%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "20px", width: "55%" }}>
          <h1 style={{ fontSize: "32px", margin: "0 0 15px 0" }}>{store.currentStarship.name}</h1>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Cargo capacity: </strong> <span style={{ color: "white" }}>{store.currentStarship.cargo_capacity} Kg</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Passenger capacity: </strong> <span style={{ color: "white" }}>{store.currentStarship.passengers}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Max speed: </strong> <span style={{ color: "white" }}>{store.currentStarship.max_atmosphering_speed} km/h</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Crew size: </strong> <span style={{ color: "white" }}>{store.currentStarship.crew}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Price: </strong> <span style={{ color: "white" }}>{store.currentStarship.cost_in_credits} credits</span></p>
          <Link to="/star-wars-starships">
            <button className="btn btn-outline-info btn-sm m-2">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
