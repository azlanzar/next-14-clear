// React Query Imports
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

// API & Service Imports
import { URL } from "@/services/api-base-urls";
import { POST } from "@/services/axios-request-handler";

// Types Imports
import { LOGIN_PAYLOAD } from "@/types/types/auth-payload";

// Toast Import
import toast from "react-hot-toast";

// Custom Types Imports
import { IAdminLoginResponse } from "@/types/Interface/login.interface";
import { AxiosError } from "axios";

export const useAdminLoginMutation = (): UseMutationResult<
  IAdminLoginResponse,
  Error,
  LOGIN_PAYLOAD
> => {
  const adminLoginFn = async (
    payload: LOGIN_PAYLOAD
  ): Promise<IAdminLoginResponse> => {
    const response = await POST<IAdminLoginResponse>(URL.ADMIN_LOGIN, payload);
    return response;
  };

  return useMutation({
    mutationFn: adminLoginFn,

    onSuccess: (message, variables, context) => {
      return {
        message,
        variables,
        context,
      };
    },

    onError: (error: AxiosError) => {
      toast.error((error?.response?.data as string) ?? "Login Failed");

      return {
        error:
          (error?.response?.data as string) ??
          "Can't access the server, please try again later.",
      };
    },
  });
};
