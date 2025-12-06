import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Bank } from "../types/qrCode/bank";

export const useGetBankQuery = () => {
  const api = "https://api.vietqr.io/v2/banks";

  return useQuery<Bank[]>({
    queryKey: ["qrBank"],
    queryFn: async () => {
      const res = await axios.get(api);
      return res.data.data; // API VietQR trả về { data: [...] }
    },
  });
};
