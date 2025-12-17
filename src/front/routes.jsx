// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { ContactList } from "./pages/ContactList.jsx";
import { ContactEdit } from "./pages/ContactEdit.jsx";
import { ContactAdd } from "./pages/ContactAdd.jsx";
import { StarWarsCharacters } from "./pages/StarWarsCharacters.jsx";
import { StarWarsHome } from "./pages/StarWarsHome.jsx";
import { StarWarsDetails } from "./pages/StarWarsDetails.jsx";
import { StarWarsPlanets } from "./pages/StarWarsPlanets.jsx";
import { StarWarsPlanetDetails } from "./pages/StarWarsPlanetDetails.jsx";
import { StarWarsStarships } from "./pages/StarWarsStarships.jsx";
import { StarWarsStarshipDetails } from "./pages/StarWarsStarshipDetails.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    // Root Route: All navigation will start from here.
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/contact-edit" element={<ContactEdit />} />
      <Route path="/contact-list" element={<ContactList />} />
      <Route path="/contact-add" element={<ContactAdd />} />
      <Route path="/star-wars-characters" element={<StarWarsCharacters />} />
      <Route path="/star-wars-home" element={<StarWarsHome />} />
      <Route path="/star-wars-details" element={<StarWarsDetails />} />
      <Route path="/star-wars-planets" element={<StarWarsPlanets />} />
      <Route path="/star-wars-planet-details" element={<StarWarsPlanetDetails />} />
      <Route path="/star-wars-starships" element={<StarWarsStarships />} />
      <Route path="/star-wars-starship-details" element={<StarWarsStarshipDetails />} />
    </Route>
  )
);