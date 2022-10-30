import React from 'react';
export const Filter = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};
