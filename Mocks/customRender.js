import React from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from 'src/shared';
import { render } from '@testing-library/react';

const TestProviders = ({ children }) => {
  /** 用于jest测试的swr provider 需要确保每次缓存都是空 */
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        provider: () => new Map(),
        fetcher,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: TestProviders, ...options });

export { customRender };
