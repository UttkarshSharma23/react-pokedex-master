import React from "react";

/*
*Rect.FC is for react functional componenet.
*Wrapper components are components that surround unknown components and provide a default structure to display the child components.
*/
const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="content">
      <Component />
    </div>
  );
};

export default Wrapper;
