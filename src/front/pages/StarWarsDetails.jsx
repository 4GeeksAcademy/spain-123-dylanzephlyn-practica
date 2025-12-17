import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const StarWarsDetails = () => {

  const { store } = useGlobalReducer();

  return (
    <div className="container-fluid d-flex justify-content-center p-5">
      <div style={{ width: "90%", maxWidth: "900px", background: "black", border: "1px solid grey", borderRadius: "15px", overflow: "hidden", marginTop: "20px", color: "yellow", display: "flex", flexDirection: "row" }}>
        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${store.currentCharacter.uid}.jpg?raw=true`} style={{ width: "45%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ padding: "20px", width: "55%" }}>
          <h1 style={{ fontSize: "32px", margin: "0 0 15px 0" }}>{store.currentCharacter.name}</h1>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Gender: </strong> <span style={{ color: "white" }}>{store.currentCharacter.gender}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Eye color: </strong> <span style={{ color: "white" }}>{store.currentCharacter.eye_color}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Hair Color: </strong> <span style={{ color: "white" }}>{store.currentCharacter.hair_color}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Skin Color: </strong> <span style={{ color: "white" }}>{store.currentCharacter.skin_color}</span></p>
          <p className="p-2" style={{ margin: "6px 0" }}><strong>Birth year: </strong> <span style={{ color: "white" }}>{store.currentCharacter.birth_year}</span></p>
          <Link to="/star-wars-characters">
            <button className="btn btn-outline-info btn-sm m-2">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
