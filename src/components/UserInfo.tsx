import React from "react";
import { User } from "../types/user";

interface IUserInfoProps {
  user: User | null;
}

const UserInfo = React.memo(({ user }: IUserInfoProps): JSX.Element => {
  if (!user) return <></>;

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
});

export default UserInfo;
