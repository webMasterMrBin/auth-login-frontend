import React, { FC } from 'react';

const ChatContentItem: FC<{ data: string }> = ({ data }) => {
  const dataJson = JSON.parse(data || '{}');
  return (
    <div className="text-white">
      <span>{dataJson?.username}:</span>
      <span>{dataJson?.data}</span>
    </div>
  );
};

export { ChatContentItem };
