export const initialStore = () => {
  return {
    host: "https://playground.4geeks.com/contact",
    slug: "elGuerrero",

    contactInfo: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    contacts: [],
    currentContact: {},
    currentCharacter: {},
    currentPlanet: {},
    currentStarship: {},
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "add_favorite":
      return { ...store, favorites: [...store.favorites, action.payload] };

    case "contact_edit":
      return { ...store, currentContact: action.payload };

    case "starship_details":
      return { ...store, currentStarship: action.payload };

    case "planet_details":
      return { ...store, currentPlanet: action.payload };

    case "character_details":
      return { ...store, currentCharacter: action.payload };

    case "load_contacts":
      return { ...store, contacts: action.payload.contacts };

    case "create_contact_post":
      return { ...store, contactInfo: action.payload };

    default:
      return store;
  }
}
