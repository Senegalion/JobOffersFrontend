import axios from "axios";

const API_URL = "/api/offers";

export const fetchOffers = async (token: string) => {
  const res = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchOfferById = async (id: string, token: string) => {
  const res = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createOffer = async (offer: any, token: string) => {
  const res = await axios.post(API_URL, offer, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
