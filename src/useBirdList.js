import { useQuery } from '@tanstack/react-query';
import fetchBirdList from './fetchBirdList';

export default function useBirdList(region) {
  const results = useQuery(['birds', region], fetchBirdList);

  return [results?.data?.birds ?? [], results.status];
}
