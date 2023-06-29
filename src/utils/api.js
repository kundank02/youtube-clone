import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'c57b0af775mshe24eb9634d01319p154f72jsncdbf1b8f0bf9',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}
