import React, { FC, useEffect, useState, useRef } from 'react';
import { createContext } from 'use-context-selector';

const WebsocketContext = createContext(null);

const WebSocketProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState(null);
  // 聊天内容
  const [chatContent, setChatContent] = useState([]);
  // 登录的用户数量
  const [usersCount, setUsersCount] = useState(0);
  // 登录的所有所有用户信息
  const [loginUsers, setLoginUsers] = useState<{ username: string; avator: string; id: string }[]>([]);

  const [isStartReconnect, setIsStartReconnect] = useState(false);
  const reConnecWSCountRef = useRef(0);
  const isNeedConnectRef = useRef(true);

  useEffect(() => {
    const reConnectWS = () => {
      reConnecWSCountRef.current++;
      if (reConnecWSCountRef.current <= 5) {
        setIsStartReconnect(true);
        setTimeout(() => {
          connectWS();
        }, 3000);
      } else {
        setIsStartReconnect(false);
      }
    };

    const connectWS = () => {
      const ws = new WebSocket('ws://127.0.0.1:3000');
      setSocket(ws);

      ws.onopen = () => {
        setIsStartReconnect(false);
        ws.send(JSON.stringify({ type: 'login' }));
      };

      // 当连接关闭时触发
      ws.onclose = () => {
        if (isNeedConnectRef.current) {
          reConnectWS();
        }
      };

      ws.onerror = () => {
        if (isNeedConnectRef.current) {
          reConnectWS();
        }
      };

      ws.onmessage = e => {
        const { type, usersCount, loginUsers, username, content } = JSON.parse(e.data || '{}');
        if (['login', 'logout'].includes(type)) {
          setUsersCount(usersCount);
          setLoginUsers(loginUsers);
        }

        if (type === 'chat') {
          setChatContent(pre => [...pre, { username, content }]);
        }
      };

      return ws;
    };

    const ws = connectWS();
    return () => {
      isNeedConnectRef.current = false;
      ws.close();
    };
  }, []);

  return (
    <WebsocketContext.Provider value={{ socket, isStartReconnect, chatContent, usersCount, loginUsers }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export { WebSocketProvider, WebsocketContext };
