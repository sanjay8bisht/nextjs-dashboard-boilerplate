const List = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-blue-gray-700">
            {children}
        </div>
    );
};

export default List;
