import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  show: boolean;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({type, show, onDismiss, children}) => {
  let className = "alert alert-dismissible alert-";
  let btnStyle = {display: 'block'};

  if (onDismiss === undefined){
    btnStyle = {display: 'none'};
  }

  return (
    <>
      <div
        className={className + type + ' w-75 m-auto mb-3'}
        style={{display: show ? 'block' : 'none'}}
      >
        {children}
        <button type="button" className="btn-close" style={btnStyle} onClick={onDismiss}></button>
      </div>
    </>
  );
};

export default Alert;