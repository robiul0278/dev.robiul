'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { store } from '@/redux/store';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers =({ children }: ProvidersProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    );
}

export default Providers;