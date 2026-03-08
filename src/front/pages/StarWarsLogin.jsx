import { Link } from "react-router-dom";


export const StarWarsLogin = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "black" }}>
            <div className="card bg-dark text-warning p-4" style={{ width: "360px", border: "1px solid #ffc107", borderRadius: "12px" }}>
                <h3 className="text-center mb-4" style={{ letterSpacing: "2px" }}>LOG IN</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">User-name</label>
                        <input type="email" className="form-control bg-black text-warning border-warning" placeholder="you@rebellion.org" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control bg-black text-warning border-warning" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn btn-outline-warning w-100 mb-3">ENTER THE ARCHIVES</button>
                </form>
                <div className="text-center">
                    <Link to="/star-wars-home">
                        <button className="btn btn-outline-info mt-3 p-1">Return</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
