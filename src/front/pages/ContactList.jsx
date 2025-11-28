import { Link } from "react-router-dom";

export const ContactList = () => {

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100" style={{ maxWidth: 550 }}>
        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
          <h1 className="m-0">Contact List:</h1>
          <Link to="/contact-add">
          <button className="btn btn-success btn-sm">Add Contact</button>
          </Link>
        </div>
        <div className="card mb-3 mt-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/300" alt="User" className="img-fluid rounded-start" style={{ objectFit: "cover", height: "100%" }}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{store.contactInfo.name}</h5>
                <p className="card-text mb-1"><strong>Email:</strong> john@example.com</p>
                <p className="card-text mb-1"><strong>Phone:</strong> +123456789</p>
                <p className="card-text mb-1"><strong>Address:</strong> 123 Main Street</p>
                <div className="d-flex gap-2 mt-3">
                  <Link to="/contact-edit">
                  <button className="btn btn-primary btn-sm">Edit</button>
                  </Link>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
