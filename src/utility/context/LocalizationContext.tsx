import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { strings } from '../localization/string';

interface LocalizationContextProps {
    language: string;
    setLanguage: (lang: string) => void;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<string>('en');

    const changeLanguage = async (lang: string) => {
        setLanguage(lang);
        strings.setLanguage(lang);
        await AsyncStorage.setItem('appLanguage', lang);
    };

    return (
        <LocalizationContext.Provider value={{ language, setLanguage: changeLanguage }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};
