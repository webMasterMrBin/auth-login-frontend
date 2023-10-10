/**
 * @file react swr 数据请求根组件 要用swr的统一用该组件
 * @author 魄兵
 */

import React, { FC } from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from 'src/shared';

const SwrProvider: FC<React.PropsWithChildren> = ({ children }) => {
  /** https://swr.vercel.app/zh-CN/docs/getting-started */
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        // shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrProvider;
