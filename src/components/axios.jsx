import React, { useEffect } from "react";
import axios from "axios";

export const Axios = () => {
  const MockData = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);

  useEffect(() => {
    MockData();
  }, []);
  return <div>axios</div>;
};
