import useSWR from 'swr';

const useGetUserInfo = () => {
  return useSWR('/api/userInfo');
};

export { useGetUserInfo };
