// components/defaultNavItems.tsx
import React from 'react';
import { CalendarIcon, FolderIcon, HomeIcon, UserGroupIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import Cookies from 'js-cookie';

export type NavItem = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    clickAction?: () => void;
};

const logout = () => {
    Cookies.remove('auth');
    document.location.href = '/login';
};

const navItems: NavItem[] = [
    {
        label: 'Dashboard',
        href: '/',
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: 'Team',
        href: '/team',
        icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
        label: 'Projects',
        href: '/projects',
        icon: <FolderIcon className="w-6 h-6" />,
    },
    {
        label: 'Calendar',
        href: '/calendar',
        icon: <CalendarIcon className="w-6 h-6" />,
    },
    {
        label: 'Logout',
        clickAction: logout,
        icon: <MinusCircleIcon className="w-6 h-6" />,
    },
];

export default navItems;
