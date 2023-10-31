import React, { FC } from 'react';

const ChatContentItem: FC<{ data: { username: string; content: string } }> = ({ data }) => {
  return (
    <div className="text-white">
      <span>{data?.username}:</span>
      <span>{data?.content}</span>
    </div>
  );
};

export { ChatContentItem };
