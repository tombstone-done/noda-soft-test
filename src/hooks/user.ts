import { useState } from "react";
import { User } from "../types/user";
import { fetchUserById } from "../api/user.api";

interface CacheItem {
  expire: number;
  data: User;
}

export const useRequestUser = (cacheTime: number) => {
  const [cachedUsers, setCachedUsers] = useState<Record<number, CacheItem>>({});
  const [user, setUser] = useState<User | null>(null);

  const receiveRandomUser = async () => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    try {
      if (cachedUsers[id]) {
        const isNotExpired =
          new Date().getTime() - cachedUsers[id].expire < cacheTime;

        if (isNotExpired) {
          setUser(cachedUsers[id].data);
          return;
        } else {
          setCachedUsers((prev) => {
            delete prev[id];
            return prev;
          });
        }
      }
      const _user = await fetchUserById(id);
      setCachedUsers((prev) => ({
        ...prev,
        [id]: { data: _user, expire: new Date().getTime() },
      }));
      setUser(_user);
    } catch (error) {
      alert(`Error fetching user: ${error}`);
    }
  };

  return { receiveRandomUser, user };
};
