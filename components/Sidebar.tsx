'use client';

import { PresentationChartBarIcon } from '@heroicons/react/24/solid';

import List from './List';
import ListItem from './ListItem';

// components/Sidebar.tsx
import React, { useState } from 'react';
import cn from 'classnames';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import navItems, { NavItem } from './SidebarItems';
import Link from 'next/link';

const Sidebar = () => {
    const [collapsed, setSidebarCollapsed] = useState(true);
    const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
    return (
        <div
            className={cn({
                'bg-indigo-700 text-zinc-50 z-20': true,
                'w-16': collapsed,
                'w-[300px]': !collapsed,
                'transition-[width] duration-300 ease-in-out': true,
            })}
        >
            <div
                className={cn({
                    'flex flex-col justify-between': true,
                })}
            >
                {/* logo and collapse button */}
                <div
                    className={cn({
                        'flex items-center border-b border-b-indigo-800': true,
                        'p-4 justify-between': !collapsed,
                        'py-4 justify-center': collapsed,
                    })}
                >
                    {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
                    <button
                        className={cn({
                            'grid place-content-center': true, // position
                            'hover:bg-indigo-800 ': true, // colors
                            'w-10 h-10 rounded-full': true, // shape
                        })}
                        // 👇 set the collapsed state on click
                        onClick={() => setSidebarCollapsed(!collapsed)}
                    >
                        <Icon className="w-5 h-5" />
                    </button>
                </div>
                <div>
                    <nav className="flex-grow">
                        <ul
                            className={cn({
                                'my-2 flex flex-col gap-2 items-stretch': true,
                            })}
                        >
                            {navItems.map((item, index) => {
                                return (
                                    <li
                                        className={cn({
                                            'text-indigo-100 hover:bg-indigo-900 flex': true, //colors
                                            'transition-colors duration-300': true, //animation
                                            'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                                            'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                                        })}
                                        key={index}
                                    >
                                        {item.href ? (
                                            <Link className="flex gap-2" href={item.href}>
                                                {item.icon} <span>{!collapsed && item.label}</span>
                                            </Link>
                                        ) : (
                                            <div className="flex gap-2 cursor-pointer" onClick={item.clickAction}>
                                                {item.icon} <span>{!collapsed && item.label}</span>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
