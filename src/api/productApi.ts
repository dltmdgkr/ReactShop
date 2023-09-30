import axios from "axios";

export const getData = async () =>
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((err) => console.log(err));
