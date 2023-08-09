import Image from 'next/image';

type CradProps = {
    imgURL?: string;
    heading?: string;
};

const Card = ({ imgURL, heading }: CradProps) => {
    return (
        <div className="flex flex-col flex-wrap justify-stretch w-[400px] bg-slate-800 text-white mr-[12px] mb-[12px] rounded-sm">
            <div className="mx-auto p-[16px]">
                {imgURL && <Image alt="Image..." className="mx-auto" height={300} src={imgURL} width={300} />}
                <div className="flex flex-col p-2">
                    <p className="text-small text-default-500">{heading}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
