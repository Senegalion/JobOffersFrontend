import React, { useState } from "react";
import { createOffer } from "../api/offers";
import { useNavigate } from "react-router-dom";

const OfferForm: React.FC<{ token: string }> = ({ token }) => {
  const [form, setForm] = useState({
    companyName: "",
    position: "",
    salary: "",
    offerUrl: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createOffer(form, token);
      navigate("/offers");
    } catch (err) {
      alert("Failed to create offer");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Offer</h2>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default OfferForm;
