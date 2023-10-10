

/** 用于useSWR的fetch  可以在react组件直接通过useSWRconfig钩子取到, 默认全局已经传了该fetcher */
const fetcher = ({
  url,
  args: { params = {}, method = 'GET' },
}: {
  url: any;
  args: { params: any; method: 'GET' | 'POST' | 'DELETE' | 'PUT' };
}) => {
  return fetch('');
};

const mutationFetcher = (url, { arg: { params, method } }) => {
  return fetch('');
};

export { fetcher, mutationFetcher };
