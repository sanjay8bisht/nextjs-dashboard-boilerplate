const ListItem = ({ text, icon }: { text: string; icon?: React.ReactElement }) => {
    return (
        <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">
            <div className="grid place-items-center mr-4">{icon}</div>
            {text}
        </div>
    );
};

export default ListItem;
