import { Link } from "react-router-dom";

export const StarWarsHome = () => {

    return (
        <div className="container fluid">
            <div className="d-flex justify-content-center gap-3 my-3 pt-3">
                <Link to="/starships" className="btn btn-outline-warning text-warning">Starships</Link>
                <Link to="/planets" className="btn btn-outline-warning text-warning">Planets</Link>
                <Link to="/star-wars-characters" className="btn btn-outline-warning text-warning">Characters</Link>
                <Link to="/contact-list" className="btn btn-outline-warning text-warning">Contacts</Link>
            </div>
            <img className="img-fluid rounded" style={{objectFit: "cover", width: "100%" }} src="https://preview.redd.it/the-spectacular-20th-anniversary-lucasfilm-animation-poster-v0-89fisy2qzjve1.jpeg?width=1080&crop=smart&auto=webp&s=66b3d680bf1691c231fe435f31832ef5255505ed" />
        </div>

    );
};