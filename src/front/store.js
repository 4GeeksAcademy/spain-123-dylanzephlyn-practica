export const initialStore=()=>{
  return{
    host: 'https://playground.4geeks.com/contact',
    slug: 'elGuerrero',

    contactInfo: {
      "name": "",
      "phone": "",
      "email": "",
      "address": ""
    },
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {

switch (action.type) {
  case "create-contact-post":
    return {
      ...store,contactInfo: action.payload};

  default:
    return store;
}
}
    

