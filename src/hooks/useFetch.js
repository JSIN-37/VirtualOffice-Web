import { useEffect } from "react";

const useFetch = (url, setData) => {
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data); // Set the data by using given hookI
      });
  }, [url, setData]);
};

export default useFetch;
