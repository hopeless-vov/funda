import axios from 'axios';
const key = 'ac1b0b1572524640a0ecc54de453ea9f'
export const HTTP = axios.create({
  baseURL: `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${key}/koop/`,
})