'use client';

import useOnScreen from '@/hooks/useOnScreen';
import React, { useEffect, useState, useRef } from 'react';
import LoaderIcon from './Loader/LoaderIcon';
import Loader from './Loader/Loader';

type ScrollProps = {
    fetchData: (page: number, limit: number) => Promise<[]>;
    ItemComponent: React.JSX.ElementType;
    limit?: number;
};

const InfiniteScroll = ({ fetchData, ItemComponent, limit = 20 }: ScrollProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
                {listItems.length > 0 ? (
                    listItems.map((item, index) => {
                        if (index === listItems.length - 1) {
                            return <ItemComponent item={item} key={index} refTarget={measureRef} />;
                        }
                        return <ItemComponent item={item} key={index} />;
                    })
                ) : (
                    <Loader />
                )}
            </div>
            {isLoading && <LoaderIcon />}
        </div>
    );
};

export default InfiniteScroll;
