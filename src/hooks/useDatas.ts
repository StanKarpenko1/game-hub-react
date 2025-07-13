import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";



interface IFetchResponse <T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // useEffect hook to send fetch request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<IFetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : [] );

  return { data, error, isLoading };
};

export default useData;
