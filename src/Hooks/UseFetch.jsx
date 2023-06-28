import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  const getFetchedData = async () => {
    try {
      const fetchedUrl = await axios(url);
      setData(fetchedUrl.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  return { data };
};

export default UseFetch;
