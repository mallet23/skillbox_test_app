import React from 'react'

const Content: React.FC = () => {
  return (
    <div>
        Content
    </div>
  );
}

const ComponentWrapper = React.memo(Content);

export { ComponentWrapper as Content }