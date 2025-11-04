'use client';

import * as React from 'react';

export function getStrictContext<T>(name: string) {
  const Context = React.createContext<T | null>(null);

  function useStrictContext() {
    const value = React.useContext(Context);
    if (value === null) {
      throw new Error(`${name} must be used within its Provider`);
    }
    return value as T;
  }

  return [Context.Provider, useStrictContext] as const;
}