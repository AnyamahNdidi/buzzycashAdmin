'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  // For Next.js, we need to ensure the store is only created once
  const storeRef = useRef(store);
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<div>Loading saved session...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}