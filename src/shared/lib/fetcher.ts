import { message } from 'antd';

/** 用于useSWR的fetch  可以在react组件直接通过useSWRconfig钩子取到, 默认全局已经传了该fetcher */
const fetcher = (url: string, args: any) => {
  return fetch(url, args)
    .then(async res => {
      const result = await res.json();
      message.success(result.message);
      return result;
    })
    .catch(err => Promise.reject(err));
};

const mutationFetcher = (url: string, { arg: { params, method, headers } }) => {
  return fetch(url, {
    method,
    body: JSON.stringify(params),
    headers,
  })
    .then(async res => {
      const result = await res.json();
      message.success(result.message);
      return result;
    })
    .catch(err => Promise.reject(err));
};

export { fetcher, mutationFetcher };
