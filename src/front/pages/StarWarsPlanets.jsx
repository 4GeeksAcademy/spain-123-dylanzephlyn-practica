import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const StarWarsPlanets = () => {
    const sHost = 'https://www.swapi.tech/api/'
    const [planet, setPlanet] = useState([])
    const { dispatch } = useGlobalReducer()

    const handleDetails = async (planeta) => {
        const uri = planeta.url;
        const response = await fetch(uri);
        const data = await response.json();

        dispatch({
            type: 'planet_details',
            payload: {
                ...data.result.properties,
                uid: planeta.uid
            }
        });
    };

    const getPlanetas = async () => {
        const uri = `${sHost}/planets`
        const response = await fetch(uri)
        if (!response.ok) {
            console.log('error', response.status, response.statusText)
            return;
        }
        const data = await response.json()
        setPlanet(data.results)
    }

    const handleFavorite = (item, type) => {
        dispatch({
            type: "add_favorite",
            payload: {
                name: item.name,
                type: type
            }
        });
    };

    useEffect(() => {
        getPlanetas()
    }, [])

    return (
        <div className="container-fluid">
            <div className="container fluid d-flex flex-wrap justify-content-between" style={{ maxWidth: "1200px" }}>

            <h1 className="pb-2 text-center pt-2" style={{ color: "yellow" }}>Planets:</h1>
            <Link to="/star-wars-home">
                <button className="btn btn-outline-info mt-3 p-1">Home</button>
            </Link>
            </div>
            <div className="d-flex flex-wrap justify-content-center pb-5">
                {planet.map((planetas) => {
                    return (
                        <div key={planetas.uid} style={{ width: "220px", border: "1px solid grey", background: "black", borderRadius: "12px", overflow: "hidden", margin: "10px", display: "inline-block", verticalAlign: "top" }}>
                            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${planetas.uid}.jpg?raw=true`} style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }} />
                            <div style={{ padding: "12px", color: "yellow" }}>
                                <h3 style={{ margin: "0 0 10px 0", fontSize: "20px" }}>{planetas.name}</h3>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 12px 12px 12px" }}>
                                <div className="d-flex gap-2 mt-3">
                                    <Link to="/star-wars-planet-details">
                                        <button onClick={() => handleDetails(planetas)} className="btn" style={{ color: "yellow", border: "1px solid yellow", backgroundColor: "transparent" }}>
                                            Details
                                        </button>
                                    </Link>
                                    <button className="btn btn-outline-danger text-danger" onClick={() => handleFavorite(planetas, "planeta")}>
                                        Favorite
                                    </button>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
        </div>
    );
};