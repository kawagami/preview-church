// src/components/ThemeToggleButton.tsx

import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    // 可以在這裡定義更多 props，例如 variant, size
}

export default function ThemeToggleButton({ children, className = '', ...props }: ButtonProps) {
    const baseStyles = `
    px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300
    bg-blue-500 hover:bg-blue-600 text-white 
    dark:bg-indigo-500 dark:hover:bg-indigo-600
    ${className} // 讓外部可以傳入額外的類別
  `;

    return (
        <button className={baseStyles} {...props}>
            {children}
        </button>
    );
}