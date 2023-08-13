import Card from '@/components/Card';
import { IProduct } from '@/interface/products';

export default async function Products() {
    const res = await fetch('https://dummyjson.com/products');
    const products = await res.json();

    return (
        <div className="flex flex-row flex-wrap">
            {products.products.map((product: IProduct) => {
                return (
                    <div className="flex justify-stretch" key={product.id}>
                        <Card heading={product.title} imgURL={product.images[0]} />
                    </div>
                );
            })}
        </div>
    );
}
