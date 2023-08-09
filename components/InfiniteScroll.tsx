'use client';

import useOnScreen from '@/hooks/useOnScreen';
import React, { useEffect, useState, useRef } from 'react';

type ScrollProps = {
    fetchData: (page: number, limit: number) => Promise<[]>;
    ItemComponent: React.JSX.ElementType;
    limit?: number;
};

const InfiniteScroll = ({ fetchData, ItemComponent, limit = 20 }: ScrollProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [listItems, setListItems] = useState([]);
    const { measureRef, isIntersecting, observer } = useOnScreen();

    const fetchMoreData = () => {
        setPage((page) => page + 1);
        setIsLoading(true);
    };

    useEffect(() => {
        (async () => {
            const apiResponse = await fetchData(page, limit);
            setListItems((prevState) => [...prevState, ...apiResponse]);
            if (apiResponse.length < limit) {
                setHasMore(false);
            }
            setIsLoading(false);
        })();
    }, [page]);

    useEffect(() => {
        if (isIntersecting && hasMore) {
            fetchMoreData();
            observer?.disconnect();
        }
    }, [isIntersecting, hasMore]);

    return (
        <div>
            <div className="flex flex-row flex-wrap content-center justify-center">
                {listItems.length > 0 &&
                    listItems.map((item, index) => {
                        if (index === listItems.length - 1) {
                            return <ItemComponent item={item} key={index} refTarget={measureRef} />;
                        }
                        return <ItemComponent item={item} key={index} />;
                    })}
            </div>
            {true && (
                <div className="w-full p-[12px] m-auto">
                    <svg
                        className="animate-spin h-5 w-5 text-white mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default InfiniteScroll;
