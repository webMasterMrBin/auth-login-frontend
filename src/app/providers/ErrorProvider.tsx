import React, { FC } from 'react';
import { Result, Button } from 'antd';

interface Props extends React.PropsWithChildren {
  error: any;
}

/** 错误捕获组件 */
const ErrorProvider: FC<Props> = ({ error, children }) => {
  // https://github.com/bvaughn/react-error-boundary
  // 加载动态路由的chunk报错时提示
  // Call props.resetErrorBoundary() to reset the error boundary and retry the render.
  if (error.name === 'ChunkLoadError') {
    return (
      <Result
        status="error"
        title={error.message}
        extra={[
          <Button type="primary" onClick={() => location.reload()}>
            刷新页面
          </Button>,
        ]}
      />
    );
  }
  return <div>{children}</div>;
};

export default ErrorProvider;
