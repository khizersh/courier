import axios from "axios";
import { BANNER, CITY, HEADLINE, MESSAGE, NEWS, OFFER, PRICE, SERVICE, TRACK, WEIGHT, ZONE } from "./ApiLinks";

// zone
export const getAllzones = async () => {
  return get(ZONE);
};
export const getStations = async () => {
  return get(ZONE + "/station");
};
export const addZone = async (body) => {
  return post(ZONE, body);
};
export const editZone = async (body) => {
  return edit(ZONE, body);
};
export const removeZone = async (id) => {
  return remove(ZONE, id);
};

// city

export const getAllCity = async () => {
  return get(CITY);
};
export const addCity = async (body) => {
  return post(CITY, body);
};
export const editCity = async (body) => {
  return edit(CITY, body);
};
export const removeCity = async (id) => {
  return remove(CITY, id);
};

//    service

export const getAllService = async () => {
  return get(SERVICE);
};
export const addService = async (body) => {
  return post(SERVICE, body);
};
export const editService = async (body) => {
  return edit(SERVICE, body);
};
export const removeService = async (id) => {
  return remove(SERVICE, id);
};

//    weight

export const getAllWeight = async () => {
  return get(WEIGHT);
};
export const addWeight = async (body) => {
  return post(WEIGHT, body);
};
export const editWeight = async (body) => {
  return edit(WEIGHT, body);
};
export const removeWeight = async (id) => {
  return remove(WEIGHT, id);
};

//    Pricing

export const getAllPrice = async () => {
  return get(PRICE);
};
export const addPrice = async (body) => {
  return post(PRICE, body);
};
export const editPrice = async (body) => {
  return edit(PRICE, body);
};
export const removePrice = async (id) => {
  return remove(PRICE, id);
};

//    headline

export const getAllHeadline = async () => {
  return get(HEADLINE);
};
export const addHeadline = async (body) => {
  return post(HEADLINE, body);
};
export const editHeadline = async (body) => {
  return edit(HEADLINE, body);
};
export const removeHeadline = async (id) => {
  return remove(HEADLINE, id);
};

//    news

export const getAllNews = async () => {
  return get(NEWS);
};
export const addNews = async (body) => {
  return post(NEWS, body);
};
export const editNews = async (body) => {
  return edit(NEWS, body);
};
export const removeNews = async (id) => {
  return remove(NEWS, id);
};

//    banner

export const getAllBanner = async () => {
  return get(BANNER);
};
export const addBanner = async (body) => {
  return post(BANNER, body);
};
export const editBanner = async (body) => {
  return edit(BANNER, body);
};
export const removeBanner = async (id) => {
  return remove(BANNER, id);
};

//    message

export const getAllMessage = async () => {
  return get(MESSAGE);
};
export const addMessage = async (body) => {
  return post(MESSAGE, body);
};
export const changeStatus = async (body) => {
  return edit(MESSAGE, body);
};
export const removeMessage = async (id) => {
  return remove(MESSAGE, id);
};
//    offer

export const getAllOffer = async () => {
  return get(OFFER);
};
export const addOffer = async (body) => {
  return post(OFFER, body);
};
export const editOffer = async (body) => {
  return edit(OFFER, body);
};
export const removeOffer = async (id) => {
  return remove(OFFER, id);
};


// rate calculatir

export const calculatePrice = async (body) => {
  return post(PRICE + "/calculate", body);
};

// TRACK

export const trackOrder = async (city , code) => {
 var form = new FormData();
 form.append("from_city",city)
 form.append("cn_no",code)
  return post(TRACK + "/calculate", form);
};





// helper
export const get = (url) => {
  return axios.get(url);
};
export const post = (url, body) => {
  return axios.post(url, body);
};
export const edit = (url, body) => {
  return axios.put(url, body);
};
export const remove = (url, id) => {
  return axios.delete(url + "/" + id);
};
