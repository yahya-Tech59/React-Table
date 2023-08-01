import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const { data, isLoading, isError, refetch } = useQuery(["posts"], () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});

useEffect(() => {
  fetch();
}, []);
