import { useEffect } from "react";
import { LocationResponse } from "../types";
import useFetch from "./useFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useClientLocation = (): LocationResponse | undefined => {
  const { data: locationData, status } = useFetch<LocationResponse>(
    process.env.LOCATION_API_URL || ""
  );

  useEffect(() => {
    if (status === "error") {
      toast.info("😕 We cannot determine your location");
    }
  }, [status]);

  return locationData;
};

export default useClientLocation;
