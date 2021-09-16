import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/react";

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    Sentry.captureException(error);
    toast.error("An Unexpected Error Occured!");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
