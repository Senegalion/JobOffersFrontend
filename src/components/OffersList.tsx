import React, { useEffect, useState } from "react";
import { fetchOffers } from "../api/offers";
import { Link } from "react-router-dom";

interface Offer {
  id: string;
  companyName: string;
  position: string;
  salary: string;
  offerUrl: string;
}

const OffersList: React.FC<{ token: string }> = ({ token }) => {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchOffers(token);
      setOffers(data);
    };
    load();
  }, [token]);

  return (
    <div>
      <h2>All Offers</h2>
      {offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            background: "#fff",
            color: "#000",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
          }}
        >
          <p>
            <strong>ID:</strong> {offer.id}
          </p>
          <p>
            <strong>Company:</strong> {offer.companyName}
          </p>
          <p>
            <strong>Position:</strong> {offer.position}
          </p>
          <p>
            <strong>Salary:</strong> {offer.salary}
          </p>
          <a href={offer.offerUrl} target="_blank" rel="noreferrer">
            External Link
          </a>
          <br />
          <Link to={`/offers/${offer.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
