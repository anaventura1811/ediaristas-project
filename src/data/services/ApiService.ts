import axios from 'axios';

const url = 'https://ediaristas-workshop.herokuapp.com';
export const ApiServices = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  }
});