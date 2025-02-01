"use client";
import {createContext, useContext, useEffect, useState, ReactNode} from 'react';
import {ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import {getTheme} from './theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_MODE_KEY = 'theme-mode';

export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        // Check localStorage first
        if (typeof window !== 'undefined') {
            const savedMode = window.localStorage.getItem(THEME_MODE_KEY) as ThemeMode | null;
            if (savedMode) {
                return savedMode;
            }
        }

        // Fall back to system preference
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return 'light';
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (typeof window !== 'undefined') {
                if (!window.localStorage.getItem(THEME_MODE_KEY)) {
                    setMode(e.matches ? 'dark' : 'light');
                }
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(THEME_MODE_KEY, newMode);
        }
    };

    const theme = getTheme(mode);

    return (
        <ThemeContext.Provider value={{mode, toggleTheme}}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
