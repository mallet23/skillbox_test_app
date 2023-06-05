import React from 'react'

const ASide: React.FC = () => {
  return (
    <div>
        ASide
    </div>
  );
}

const ComponentWrapper = React.memo(ASide);

export { ComponentWrapper as ASide }