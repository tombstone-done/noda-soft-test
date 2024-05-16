import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import { useThrottle } from "./hooks/throttle";
import { useRequestUser } from "./hooks/user";

function App(): JSX.Element {
  const { receiveRandomUser, user } = useRequestUser(10000);
  const handleButtonClick = useThrottle(receiveRandomUser, 1000);
  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} />
      <UserInfo user={user} />
    </div>
  );
}

export default App;
