import * as request from "../request";

export const get = async (id = "") => {
  const path = "/data/" + id;
  const humidityApi = await request.getApi(path);
  return humidityApi;
};

// export const set = async (option, content) => {
//     const path = `users/${option}`;
//     request.setApi(path, content);
// };

export const update = async (content, id = "") => {
  const path = "/data/" + id;
  request.updateApi(path, content);
};
