import custimAxios from "../configs/axios.config";

export const userUtils = {
  getUsers: async () => {
    const { data } = await custimAxios.get("user/all");
    return data;
  },
  getSingleUser: async () => {
      const { data } = await custimAxios.get("/user/single");
      localStorage.setItem("user", JSON.stringify(data));
      return data;
  },
  getUserDevice: async (userId) => {
    const { data } = await custimAxios.get(`user/user-device/${userId}`);
    return data;
  },
  postUser: async ({ password, phone, roles, username }) => {
    const { data } = custimAxios.post("user/add", {
      password: password,
      phone: phone,
      roles: roles,
      username: username,
    });
    return data;
  },
  patchUser: async ({
    id,
    email,
    favoriteCottages,
    image,
    name,
    phone,
  }) => {
    const formData = new FormData();
    formData.append("email", email);
    if (Array.isArray(favoriteCottages) && favoriteCottages.length) {
      for (const fC of favoriteCottages) {
        formData.append("favoriteCottages", fC);
      }
    }
    formData.append("image", image);
    formData.append("name", name);
    formData.append("phone", phone);
    console.log(phone);
    const { data } = await custimAxios.patch(`user/edit/${id}`, formData);
    return data;
  },
  deletUser: async (id) => {
    const { data } = await custimAxios.delete(`user/delete/${id}`);
    return data;
  },
};
