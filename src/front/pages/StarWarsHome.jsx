import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import theme from "../components/star-wars-theme.mp3";
import { useEffect } from "react"

export const StarWarsHome = () => {

    const { store } = useGlobalReducer();

    useEffect(() => {
        const audio = new Audio(theme);
        audio.volume = 0.4;
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="container fluid">
            <div className="d-flex justify-content-center gap-3 my-3 pt-3">
                <Link to="/star-wars-starships" className="btn btn-outline-warning text-warning">Starships</Link>
                <Link to="/star-wars-planets" className="btn btn-outline-warning text-warning">Planets</Link>
                <Link to="/star-wars-characters" className="btn btn-outline-warning text-warning">Characters</Link>
                <Link to="/contact-list" className="btn btn-outline-warning text-warning">Contacts</Link>
                <div className="btn-group">
                    <button className="btn btn-outline-danger" type="button">
                        Favorites ({store.favorites.length})
                    </button>
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu bg-dark text-warning text-center">
                        {store.favorites.length === 0 ?
                            (<li className="dropdown-item text-muted">No favorites</li>) :
                            (store.favorites.map((fav, index) => (<li key={index} className="dropdown-item d-flex justify-content-between align-items-center cursor-pointer" onClick={() => deleteFavorite(fav)}>
                                <span>{fav.name}-{fav.type}</span>
                            </li>)))}
                    </ul>
                </div>
            </div>
            <img className="img-fluid rounded" style={{ objectFit: "cover", width: "100%" }} src="https://preview.redd.it/the-spectacular-20th-anniversary-lucasfilm-animation-poster-v0-89fisy2qzjve1.jpeg?width=1080&crop=smart&auto=webp&s=66b3d680bf1691c231fe435f31832ef5255505ed" />
        </div>

    );
};