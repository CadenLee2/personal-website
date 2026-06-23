import { useSearchParams } from '@solidjs/router';

export function useIdNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = () => typeof searchParams.id === "string" ? searchParams.id : undefined;

  const navigateToId = (newId: string | undefined) => {
    setSearchParams({ id: newId });
  };

  return { selectedId, navigateToId };
}
