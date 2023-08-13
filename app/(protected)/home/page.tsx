'use client';

import Card from '@/components/Card';
import InfiniteScroll from '@/components/InfiniteScroll';
import Loader from '@/components/Loader/Loader';
import { delay } from '@/utils/delay';
import React, { Suspense, useEffect } from 'react';

const Posts = ({ item, refTarget }) => {
    return (
        <div className={`flex justify-stretch ${item.id}`} ref={refTarget}>
            <Card heading={item.title} imgURL={item.url} />
        </div>
    );
};

const Home = () => {
    const fetchData = async (page: number, limit: number) => {
        // throw Error('sddsdsd');
        await delay(10000);
        const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };
    return <InfiniteScroll fetchData={fetchData} ItemComponent={Posts} limit={25} />;
};

export default Home;
