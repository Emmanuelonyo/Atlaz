import React from 'react';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-primary/5 via-primary/0 to-transparent blur-[120px]"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-accent-teal/5 via-accent-teal/0 to-transparent blur-[120px]"></div>
      <div className="absolute top-[30%] left-[5%] w-[60vw] h-[60vw] rounded-full bg-blue-50/40 dark:bg-blue-900/5 blur-[150px] opacity-50"></div>
    </div>
  );
}
