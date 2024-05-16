import { User } from "../types/user";
import { request } from "./api";

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await request(`users/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
