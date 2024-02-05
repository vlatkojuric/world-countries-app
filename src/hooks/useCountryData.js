import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useCountryData() {
  return useQuery({
    queryKey: ["country-data"],
    queryFn: async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);

      return response.data;
    },
  });
}
