import { render } from '@testing-library/react'
import { Suspense } from 'react';

const Wrapper = ({ children }) => {
  return (
    <Suspense fallback="">
      {children}
    </Suspense>
  )
};

export * from '@testing-library/react';
export const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options });
