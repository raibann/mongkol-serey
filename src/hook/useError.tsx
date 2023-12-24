import { useState } from 'react';

export default function useError() {
  const [errorState, setErorrState] = useState<{
    message: string;
    error: boolean;
  }>({
    message: 'Something went wrong',
    error: false,
  });
  return {
    errorState,
    setErorrState,
  };
}
