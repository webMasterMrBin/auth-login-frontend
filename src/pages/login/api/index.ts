import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { mutationFetcher } from 'src/shared';

const useRegister = () => {
  return useSWRMutation('/api/register', mutationFetcher);
};

const useLogin = () => {
  return useSWRMutation('/api/login', mutationFetcher);
};

export { useRegister, useLogin };
