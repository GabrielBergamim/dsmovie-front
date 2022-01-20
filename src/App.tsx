import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Navbar } from "components/Navbar";
import { Listing } from "pages/Listing";
import { Form } from "pages/Form";

import './app.css';

export function App() {
  return (
    <section className="page">
      <BrowserRouter>
        <Navbar />

        <section className="page-content">
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/form">
              <Route path=":movieId" element={<Form />} />
            </Route>
          </Routes>
        </section>
      </BrowserRouter>
    </section>
  );
}