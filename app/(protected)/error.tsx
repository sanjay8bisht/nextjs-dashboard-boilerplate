'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="bg-slate-50 p-[16px] rounded-md flex flex-col justify-center align-middle text-black h-[50vh] w-[50vw] text-center">
            <h2 className="p-[24px]">Something went wrong!</h2>
            <button
                className="bg-indigo-700 text-white p-[12px] w-[10vw] rounded-md self-center"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
