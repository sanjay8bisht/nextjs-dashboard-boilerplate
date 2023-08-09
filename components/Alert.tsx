'use client';

export default function Alert({ type, message }: { type: string; message: string }) {
    const getBGColor = () => {
        let bgColor = 'bg-red-400';
        switch (type) {
            case 'success':
                bgColor = 'bg-green-400';
                break;
            case 'warning':
                bgColor = 'bg-yellow-400';
                break;
        }
        return bgColor;
    };
    return (
        <div
            className={`absolute bottom-[20px] left-[calc(50%)] translate-x-[-50%] m-auto ${getBGColor()} rounded-md text-white p-[16px] transition-[opacity] duration-300 ease-in-out`}
        >
            <div>
                <p className="">{message}</p>
            </div>
        </div>
    );
}
