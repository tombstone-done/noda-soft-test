// тестовое задание: https://github.com/NodaSoft/hr/blob/main/frondend-react/test-code

// Хуки, компоненты, эндпоинты, стоит вынести в отдельные файлы
// для более понятной структуры, удобной читабельности и
// масштабирования проекта.

// Так же стоит использовать HOC компоненту React.memo для
// того тобы исключить ненужные перерисовки компоненты (Button,
// UserInfo).

// Используем React.useCallback для кеширования функции а так
// же чтобы предотвратить ненужные рендеры в случае если пропсы
// не меняются (useTrottle).

// useTrottle используем дабы снизить нагрузку на бек, из за
// возможных множественных кликов пользователя.

// Так же для кеширования запросов на получение пользователей
// и для увеличения читабельности кода вся логика связанная с
// получением пользователей была вынесена в отдельный хук -
// useRequestUser. Так же теперь пользователи кэшируются на
// заданное время 10000 миллисекунд

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
