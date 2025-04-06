import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOfferById } from "../api/offers";

const OfferDetail: React.FC<{ token: string }> = ({ token }) => {
  const { id } = useParams();
  const [offer, setOffer] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchOfferById(id!, token);
        setOffer(data);
      } catch (err) {
        alert("Offer not found");
      }
    };
    load();
  }, [id, token]);

  if (!offer) return null;

  return (
    <div
      style={{
        textAlign: "left",
        background: "#fff",
        color: "#000",
        padding: 20,
      }}
    >
      <h2>Offer Detail</h2>
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
      <p>
        <a href={offer.offerUrl} target="_blank">
          External Link
        </a>
      </p>
    </div>
  );
};

export default OfferDetail;
