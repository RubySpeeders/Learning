import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer DdVeaKZMFVmhIfaFmi5KvcXsg0wNmyjhclSTVWCfqObFYRVhJvIUNyFaI97DmlhFzQz17kvcKjgo_Iinj5cD9WliWlj9XdRS1-tEq_n0mYN8R1x-N5P575NkgHrLYHYx'
  }
})