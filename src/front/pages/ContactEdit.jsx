
import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ContactEdit = () => {

    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    const editContact = store.currentContact

    const [name, setName] = useState(editContact.name);
    const [phone, setPhone] = useState(editContact.phone);
    const [email, setEmail] = useState(editContact.email);
    const [address, setAddress] = useState(editContact.address);

    const createContactPost = async () => {
        const body = { name, phone, email, address };

        const response = await fetch(`${store.host}/agendas/${store.slug}/contacts/${editContact.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            console.log("Error creating contact:", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        console.log("Contact created:", data);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createContactPost();
        navigate("/contact-list");
    };

    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 col-12 col-sm-6 col-md-6 col-lg-8">
            <h1 className="pb-2" style={{ color: "yellow" }}>Edit Contact:</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text">Full name:</span>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Email:</span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Phone:</span>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Address:</span>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-outline-primary btn-sm">Save</button>
                <Link to="/contact-list">
                    <button className="btn btn-outline-info btn-sm m-2">Cancel</button>
                </Link>
            </form>
        </div>
    );
};










// import { useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import useGlobalReducer from "../hooks/useGlobalReducer"

// export const ContactEdit = () => {
//     const navigate = useNavigate();
//     const { store } = useGlobalReducer();

//     const [name, setName] = useState(store.contactInfo.name || "");
//     const [phone, setPhone] = useState(store.contactInfo.phone || "");
//     const [email, setEmail] = useState(store.contactInfo.email || "");
//     const [address, setAddress] = useState(store.contactInfo.address || "");

//     const updateContact = async () => {
//         const body = { name, phone, email, address };

//         const response = await fetch(
//             `${store.host}/agendas/${store.slug}/contacts/${store.contactInfo.id}`,
//             {
//                 method: "PUT", // PUT is required by the API
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body)
//             }
//         );

//         if (!response.ok) {
//             console.log("Error updating contact:", response.status, response.statusText);
//             return;
//         }

//         const data = await response.json();
//         console.log("Contact updated:", data);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         await updateContact();
//         navigate("/contact-list");
//     };

//     return (
//         <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 col-12 col-sm-6 col-md-6 col-lg-8">
//             <h1 className="pb-2" style={{ color: "yellow" }}>Edit Contact:</h1>

//             <form onSubmit={handleSubmit}>
//                 <div className="input-group mb-3">
//                     <span className="input-group-text">Full name:</span>
//                     <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control"/>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span className="input-group-text">Email:</span>
//                     <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span className="input-group-text">Phone:</span>
//                     <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="form-control"/>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span className="input-group-text">Address:</span>
//                     <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control"/>
//                 </div>

//                 <button type="submit" className="btn btn-outline-primary btn-sm">Save</button>

//                 <Link to="/contact-list">
//                     <button className="btn btn-outline-info btn-sm m-2" type="button">Cancel</button>
//                 </Link>
//             </form>
//         </div>
//     );
// };
