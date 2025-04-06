import React, { useEffect, useState } from "react";
import { fetchOffers, fetchOfferById, createOffer } from "../api/offers";

interface Offer {
  id: string;
  companyName: string;
  position: string;
  salary: string;
  offerUrl: string;
}

const OffersPanel: React.FC<{ token: string }> = ({ token }) => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [form, setForm] = useState({
    companyName: "",
    position: "",
    salary: "",
    offerUrl: "",
  });

  useEffect(() => {
    const loadOffers = async () => {
      const data = await fetchOffers(token);
      setOffers(data);
    };
    loadOffers();
  }, [token]);

  const handleViewOne = async () => {
    try {
      const data = await fetchOfferById(selectedId, token);
      setSelectedOffer(data);
    } catch (err) {
      alert("Offer not found");
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newOffer = await createOffer(form, token);
      setOffers((prev) => [...prev, newOffer]);
      setForm({ companyName: "", position: "", salary: "", offerUrl: "" });
    } catch (err) {
      alert("Failed to create offer");
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <h2>All Offers</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            <strong>{offer.companyName}</strong> - {offer.position} - 💰{" "}
            {offer.salary} -{" "}
            <a href={offer.offerUrl} target="_blank">
              Link
            </a>
          </li>
        ))}
      </ul>

      <hr />

      <h3>Get Offer by ID</h3>
      <input
        type="text"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        placeholder="Enter offer ID"
      />
      <button onClick={handleViewOne}>Get Offer</button>
      {selectedOffer && (
        <div>
          <h4>{selectedOffer.companyName}</h4>
          <p>{selectedOffer.position}</p>
          <p>{selectedOffer.salary}</p>
          <a href={selectedOffer.offerUrl}>Go to offer</a>
        </div>
      )}

      <hr />

      <h3>Add New Offer</h3>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Company"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Salary"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Offer URL"
          value={form.offerUrl}
          onChange={(e) => setForm({ ...form, offerUrl: e.target.value })}
          required
        />
        <button type="submit">Create Offer</button>
      </form>
    </div>
  );
};

export default OffersPanel;
