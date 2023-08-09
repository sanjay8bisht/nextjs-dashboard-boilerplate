import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex justify-center w-full p-[16px] overflow-auto">{children}</div>
        </div>
    );
}
