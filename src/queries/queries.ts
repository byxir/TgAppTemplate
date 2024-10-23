import axios, { AxiosInstance, AxiosResponse } from "axios";

import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

export const baseUrl = "https://monsterrr-api.online/";
// export const baseUrl = "https://testproject2024.online/";

// const { initDataRaw } = retrieveLaunchParams();
// export const initData = `tma ${initDataRaw}`;
export const initData =
  "tma query_id=AAGYfQdBAAAAAJh9B0GE6428&user=%7B%22id%22%3A1091009944%2C%22first_name%22%3A%22%D0%B1%D1%83%D0%BA%D0%B2%D0%B0%D0%B1%D1%8D%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22byxirski%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727885987&hash=644f1d17254787f9fbf531910b9ef6a02d3752070df349c50946cd072ce4e230";
// export const initData =
// "tma query_id=AAGYfQdBAAAAAJh9B0H4zG2-&user=%7B%22id%22%3A1091009944%2C%22first_name%22%3A%22%D0%B1%D1%83%D0%BA%D0%B2%D0%B0%D0%B1%D1%8D%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22byxirski%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727370967&hash=a31979019c4a6f6cfee387883e19f88684034fcaea9b772f83f78b6784c3c3e9";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: initData,
  },
});
