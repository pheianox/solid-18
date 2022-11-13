import { createI18nContext } from '../src/solid-lang';

const dictinary = {
    az: {
        lang: 'Azərbaycan dili',
        flag: '🇦🇿',
        login_page: {
            title: 'Xoş gəlmisiniz!',
            greeting: 'Salam, {{name}}! Sizi görmək xoşdur!',
            username: 'İstifadəçi adı',
            password: 'Sifrə',
        },
    },
    en: {
        lang: 'English',
        flag: '🇺🇸',
        login_page: {
            title: 'Welcome!',
            greeting: 'Hi, {{name}}! Nice to see you!',
            username: 'Username',
            password: 'Password',
        },
    },
    ru: {
        lang: 'Русский язык',
        flag: '🇷🇺',
        login_page: {
            title: 'Добро пожаловать!',
            greeting: 'Здравствуйте, {{name}}! Рады вас видеть!',
            username: 'Имя пользователя',
            password: 'Пароль',
        },
    },
} as const;

const i18n = createI18nContext(dictinary, 'az');
