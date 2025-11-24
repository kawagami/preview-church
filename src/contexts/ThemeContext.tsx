import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. 定義 Context 的型別
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// 2. 建立 Context，並提供預設值
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. 建立 Provider 元件
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // 嘗試從 localStorage 載入，或使用系統偏好設定，預設為 'light'
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        // 檢查系統偏好設定 (Optional: 根據使用者系統設定預設主題)
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    // 4. 使用 useEffect 監聽 theme 變化，並應用 'dark' class 到 <html> 元素
    useEffect(() => {
        const root = window.document.documentElement;

        // 根據主題設定，添加或移除 'dark' class
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // 將當前主題儲存到 localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 5. 切換主題的函式
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 6. 建立 Hook 方便使用 Context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};