import React, { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';

const CustomErrorMessage: FC<{ name: string; errors: any }> = ({ name, errors }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        console.log('mesages', messages);
        return (
          messages &&
          Object.entries(messages).map(([type, message]: [string, string]) => {
            if (typeof message === 'string') {
              return (
                <p className="error-message" key={type}>
                  {message}
                </p>
              );
            }
          })
        );
      }}
    />
  );
};

export { CustomErrorMessage };
