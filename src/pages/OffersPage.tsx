import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OffersList from "../components/OffersList";
import OfferDetail from "../components/OfferDetail";
import OfferForm from "../components/OfferForm";

const OffersPage: React.FC<{ token: string }> = ({ token }) => {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/offers">All Offers</Link> |{" "}
        <Link to="/offers/new">Add Offer</Link>
      </nav>

      <p style={{ fontStyle: "italic", color: "gray", marginBottom: 20 }}>
        Offers are fetched automatically every 3 hours.
      </p>

      <Routes>
        <Route path="/" element={<OffersList token={token} />} />
        <Route path="/new" element={<OfferForm token={token} />} />
        <Route path="/:id" element={<OfferDetail token={token} />} />
      </Routes>
    </div>
  );
};

export default OffersPage;
