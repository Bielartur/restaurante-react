import React from 'react'

export function Main({ children, className = '' }) {
  return (
    <main className={`flex-1 p-4 bg-slate-100 overflow-auto ${className}`}>
      {children}
    </main>
  );
}

