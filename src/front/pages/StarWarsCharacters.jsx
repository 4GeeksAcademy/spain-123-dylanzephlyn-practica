import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const StarWarsCharacters = () => {
    const sHost = 'https://www.swapi.tech/api/'
    const [characters, setCharacters] = useState([])

    const getCharacters = async () => {
        const uri = `${sHost}/people`
        const response = await fetch(uri)
        if (!response.ok) {
            console.log('error', response.status, response.statusText)
            return;
        }
        const data = await response.json()
        setCharacters(data.results)
    }
    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div className="container-fluid">
            <h1 className="pb-2 text-center pt-2" style={{color: "yellow"}}>Characters:</h1>
            <div className="d-flex flex-wrap justify-content-center">
            {characters.map((personajes) => {
                return(
                    <div key={personajes.uid} style={{ width: "220px", border: "1px solid grey", background: "black", borderRadius: "12px", overflow: "hidden", margin: "10px", display: "inline-block", verticalAlign: "top" }}>
                        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${personajes.uid}.jpg?raw=true`} style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }} />
                        <div style={{ padding: "12px", color: "yellow" }}>
                            <h3 style={{ margin: "0 0 10px 0", fontSize: "20px" }}>{personajes.name}</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 12px 12px 12px" }}>
                            <div className="d-flex gap-2 mt-3">
                                <Link to="/star-wars-details">                                
                                <button className="btn" style={{ color: "yellow", border: "1px solid yellow", backgroundColor: "transparent" }}>
                                    Details
                                </button>
                                </Link>
                                <button className="btn btn-outline-danger text-danger">
                                    Favorite
                                </button>
                            </div> 
                        </div>
                    </div>
                )
            })}  
            </div>
            </div>
    );
};



