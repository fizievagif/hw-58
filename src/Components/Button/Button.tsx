import React from 'react';

interface Props {
  type: string;
  label: string;
  continueBtn: React.MouseEventHandler;
  cancelBtn: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({type, label, cancelBtn, continueBtn}) => {
  const className = "btn btn-";
  let onClick;

  if (type === 'primary') {
    onClick = continueBtn;
  } else {
    onClick = cancelBtn;
  }

  return (
    <>
      <button
        className={className + type}
        onClick={onClick}
      >{label}</button>
    </>
  );
};

export default Button;