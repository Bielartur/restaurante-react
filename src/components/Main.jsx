import React from 'react'

export function Main({ children, className = '' }) {
  return (
    <main className={`flex-1 py-4 px-6 bg-stone-100 overflow-auto ${className}`}>
      {children}
    </main>
  );
}

