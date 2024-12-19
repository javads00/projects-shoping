import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  RequestInterface,
  useAppDispatch,
  UseFetchRequest,
  UseFetchResponse,
} from ".";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../store/reducers/userReducer";
import { ErrorResponseInterface } from "../interfaces";

export const useFetch = <TData = object, TBody = unknown, TQuery = unknown>({
  request,
  errorHandler,
  onSuccess,
  fetchInitial = false,
}: UseFetchRequest<TData, TBody, TQuery>): UseFetchResponse<
  TData,
  TBody,
  TQuery
> => {
  const navigate = useNavigate();
  const [body, setBody] = useState<RequestInterface<TBody, TQuery>>({
    ...request,
  });

  const dispatch = useAppDispatch();

  const [enable, setEnable] = useState<boolean>(fetchInitial ?? false);

  const fetch = useQuery<TData>({
    queryKey: [body],
    queryFn: () =>
      creatorAxios<TData>({ ...body })
        .then((res) => res.data)
        .catch((error) => {
          if (error) {
            if (error instanceof AxiosError && error.response) {
              if (error.response.status === 401) {
                setTimeout(() => {
                  toast.info("ابتدا وارد سامانه شوید");
                }, 400);
                dispatch(logOutUser(null));

                navigate("/login");
              }
              if (errorHandler != undefined) {
                {
                  errorHandler(
                    error.response?.data as unknown as ErrorResponseInterface
                  );
                }
              } else {
                (
                  error.response?.data as unknown as ErrorResponseInterface
                ).error.forEach((n) => {
                  toast.error(n.message);
                });
              }
            } else toast.error("خطا در ارسال درخواست");
          }
        }),
    gcTime: 0,
    staleTime: 0,
    retry: 0,
    enabled: enable,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (fetch && !fetch.error && fetch.isSuccess) {
      onSuccess?.(fetch.data);
      setEnable(false);
    }
  }, [fetch.data]);

  if (!fetch.error && fetch.isSuccess) {
    return {
      data: {
        error: fetch.error,
        status: fetch.status,
        data: fetch.data,
      },
      reFetch(payload, query) {
        if (fetchInitial) {
          fetch.refetch();
        } else {
          setBody({ ...body, body: payload, query: query });
          setEnable(true);
        }
      },
      refetchByInvalidKeys() {
        if (body) {
          queryClient.invalidateQueries({
            queryKey: [body],
            exact: true,
          });
          fetch.refetch().then((res) => {
            if (res.isSuccess) {
              onSuccess?.(res.data);
            }
          });
        }
      },
      requestDetail: body,
      isLoading: fetch.isFetching,
    };
  }

  return {
    reFetch(payload, query) {
      if (fetchInitial) {
        fetch.refetch();
      } else {
        setBody({ ...body, body: payload, query: query });
        setEnable(true);
      }
    },
    refetchByInvalidKeys() {
      if (body) {
        queryClient.invalidateQueries({
          queryKey: [body],
          exact: true,
        });
        fetch.refetch().then((res) => {
          if (res.isSuccess && !res.isError && res) {
            onSuccess?.(res.data);
          }
        });
      }
    },
    requestDetail: body,
    isLoading: fetch.isFetching,
  };
};

const creatorAxios = <TData>({
  method,
  url,
  body,
  header,
  query,
  reuqestType,
}: RequestInterface<unknown, unknown>) => {
  if (method === "Post")
    if (reuqestType && reuqestType == "form-data") {
      return axios.post<TData>(url, body, {
        headers: { ...header, "Content-Type": "multipart/form-data" },
      });
    } else return axios.post<TData>(url, body, { headers: header });
  else if (method == "Get") {
    return axios.get<TData>(
      `${url}${
        query
          ? `?${Object.getOwnPropertyNames(query)
              .map((n) => `${n}=${query[n as keyof typeof query]}`)
              .join("&")}`
          : ""
      }`,
      {
        headers: header,
      }
    );
  } else if (method === "Put")
    return axios.put(url, body, {
      headers: header,
    });
  else
    return axios.delete(url, {
      headers: header,
      data: body,
    });
};
