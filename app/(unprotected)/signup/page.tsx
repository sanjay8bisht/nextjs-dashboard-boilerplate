'use client';

import FormInput from '@/components/FormInput';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Alert from '@/components/Alert';
import Button from '@/components/Buttons';

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [formFilled, setFormFilled] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (username && password) {
            setFormFilled(true);
        }
    }, [username, password]);

    const authenticate = async () => {
        if (formFilled) {
            setLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            };
            const apiResponse = await fetch('/api/signup', requestOptions);
            const response = await apiResponse.json();
            if (apiResponse.status === 200 && response.data?.token) {
                Cookies.set('bearer_token', response.data.token, { expires: 1 });
                router.push('home');
            } else {
                setErrorMessage(response.message);
            }
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col h-screen justify-center">
                <div className="bg-slate-100 text-slate-950 px-[16px] py-[32px] w-[500px] m-auto rounded-[10px] text-center">
                    <h1 className="text-3xl py-[12px] text-center">SIGNUP</h1>
                    <FormInput
                        onChangeEvent={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                        type="text"
                        value={username}
                    />
                    <FormInput
                        onChangeEvent={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                        type="text"
                        value={password}
                    />
                    <div className="">
                        <Button disabled={!formFilled} loading={loading} onClick={authenticate}>
                            SIGNUP
                        </Button>
                    </div>
                </div>
            </div>
            {errorMessage && <Alert message={errorMessage} type="error" />}
        </>
    );
}
