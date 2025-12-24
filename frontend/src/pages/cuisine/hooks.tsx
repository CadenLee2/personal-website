import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export function useIdNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get('id');

  const navigateToId = useCallback((newId: string | undefined) => {
    const s = searchParams;
    if (newId) {
      s.set('id', newId);
    } else {
      s.delete('id');
    }
    setSearchParams(s);
  }, [setSearchParams, searchParams]);

  return { selectedId, navigateToId };
}
