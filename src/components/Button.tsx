import React from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.memo(({ onClick }: Props): JSX.Element => {
  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
});

export default Button;
