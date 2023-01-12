import React from 'react';

const Tooltip = (props) => {
  const { href } = props;

  React.useEffect(() => {
    console.log('href prop changed:', href);
  }, [href]);

  return (
    <div style={{ backgroundColor: '#ccc' }}>
      <p>Test the href is {href}</p>
    </div>
  );
};

export default Tooltip;
