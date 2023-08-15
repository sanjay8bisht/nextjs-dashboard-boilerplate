import { ReactNode } from 'react';
import LoaderIcon from './Loader/LoaderIcon';

interface ButtonProps {
    children: ReactNode;
    disabled: boolean;
    onClick: () => void;
    loading?: boolean;
    loadingSize?: number;
    extraClass?: string;
}

export default function Button({
    children,
    disabled,
    onClick,
    extraClass,
    loading = false,
    loadingSize = 6,
}: ButtonProps) {
    return (
        <button
            className={`w-[calc(85%)] p-[12px] bg-indigo-700 text-white rounded-[10px] disabled:bg-indigo-400 ${extraClass}`}
            disabled={disabled}
            onClick={onClick}
        >
            {loading ? <LoaderIcon size={loadingSize} /> : children}
        </button>
    );
}
