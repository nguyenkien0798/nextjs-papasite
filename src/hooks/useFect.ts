import paginate from "@/utils/common";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/fabpot/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const _data = paginate(data)
      setData(_data);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};