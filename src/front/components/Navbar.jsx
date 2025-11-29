import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="">Portfolio</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				</button>
				<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
					<li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
					<ul className="dropdown-menu">
						<li><Link className="dropdown-item" to="/star-wars-home">Star Wars</Link></li>
						<li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
						<li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
					</ul>
					</li>
				</ul>
				</div>
			</div>
		</nav>

	);
};





		// <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
		// 	<div className="container">
		// 		<Link to="/">
		// 			<span className="h1" style={{ color: "black" }}>Portfolio Home</span>
		// 		</Link>
		// 		<div className="ml-auto">
		// 			<Link to="/contact-list">
		// 				<button className="btn btn-dark me-2" style={{backgroundColor: "yellow", color: "black "}}>Contact list</button>
		// 			</Link>
		// 			<Link to="/star-wars-characters">
		// 				<button className="btn btn-dark" style={{backgroundColor: "black", color: "white" }}>star wars</button>
		// 			</Link>
					
		// 		</div>
		// 	</div>
		// </nav>