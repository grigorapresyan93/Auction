import axios from "axios";

export const submitStepData = (data: object) => {
  const endpoints = {
    step1Url: "https://httpbin.org/post"
  };
  return axios
    .post(endpoints.step1Url, {
      data
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
};
