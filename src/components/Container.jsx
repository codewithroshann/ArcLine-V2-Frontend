import React from 'react';

const Container = ({ children,className }) => {
  return (
    <div className={`max-w-7xl mx-auto  py-6   ${className}` }>
      {children}
    </div>
  );
};

export default Container;
