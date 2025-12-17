import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const ContactList = () => {

  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const getAgenda = async () => {
    const response = await fetch(`${store.host}/agendas/${store.slug}`);

    if (response.status === 404) {
      console.log("Agenda does not exist.");
      await createAgendaPost();
      return await getAgenda();
    }
    if (!response.ok) {
      console.log("Error loading agenda:", response.status, response.statusText);
      return;
    }
    const data = await response.json();
    console.log("Agenda loaded:", data);

    dispatch({
      type: "load_contacts",
      payload: data
    });
  };

  const createAgendaPost = async () => {
    const body = {
      slug: store.slug,
      id: ""
    };

    const response = await fetch(`${store.host}/agendas/${store.slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.log("Error creating agenda:", response.status, response.statusText);
      return;
    }

    const data = await response.json();
    console.log("Agenda created:", data);
  };

  const deleteContact = async (id) => {
    const response = await fetch(
      `${store.host}/agendas/${store.slug}/contacts/${id}`,
      {method: "DELETE",}
    );
    if (!response.ok) {
      console.log("Error deleting contact:", response.status, response.statusText);
      return;}
    await getAgenda();
  };

  const handleEdit = (contacto) => {
    dispatch({
      type: 'contact_edit',
      payload: contacto
    })
    navigate('/contact-edit')
  }

  useEffect(() => {
    getAgenda();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100" style={{ maxWidth: 550 }}>
        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
          <h1 className="m-0" style={{ color: "yellow" }}>Contact List:</h1>
          <div>
            <Link to="/star-wars-home">
              <button className="btn btn-outline-info btn-sm m-2">Home</button>
            </Link>
            <Link to="/contact-add">
              <button className="btn btn-outline-success btn-sm">Add Contact</button>
            </Link>
          </div>
        </div>
        {store.contacts.map((contact) => (
          <div className="card mb-3 mt-3 w-100" key={contact.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://i.pinimg.com/736x/04/11/a4/0411a4961f3724f15df8f6a52f75ce44.jpg" className="img-fluid rounded-star m-1" style={{ width: "180px", borderRadius: "100px" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ border: "1px solid grey", background: "black", color: "yellow" }}>
                  <h5 className="card-title">Name: <b style={{ color: "white" }}>{contact.name}</b></h5>
                  <p className="card-text mb-1"><strong>Email: </strong><b style={{ color: "white" }}>{contact.email}</b></p>
                  <p className="card-text mb-1"><strong>Phone: </strong><b style={{ color: "white" }}> {contact.phone}</b></p>
                  <p className="card-text mb-1"><strong>Address: </strong><b style={{ color: "white" }}> {contact.address}</b></p>
                  <div className="d-flex gap-2 mt-3">
                      <button onClick={() => handleEdit(contact)} className="btn btn-outline-primary btn-sm">Edit</button>
                      <button onClick={() => deleteContact(contact.id)} className="btn btn-outline-danger btn-sm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

