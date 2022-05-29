import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ETFs4KnoPygj1s_CrxUNmAa0MvHw5KFPLwQFN7PXnM8",
  },
});
