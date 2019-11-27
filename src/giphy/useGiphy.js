import { useEffect, useState } from "react";
import { getGifs } from "./api";

export default function useGiphy(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function getGifsFromApi() {
      setIsLoading(true);
      try {
        const gifs = await getGifs(query);
        setGifs(gifs);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }

    if (query && query.length > 0) getGifsFromApi();
  }, [query]);

  return [gifs, isLoading];
}
