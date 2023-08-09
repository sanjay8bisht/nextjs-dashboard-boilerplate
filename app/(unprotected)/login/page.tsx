'use client';

import FormInput from '@/components/FormInput';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Alert from '@/components/Alert';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [formFilled, setFormFilled] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if (username && password) {
            setFormFilled(true);
        }
    }, [username, password]);

    const authenticate = async () => {
        if (formFilled) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            };
            const apiResponse = await fetch('/api/login', requestOptions);
            const response = await apiResponse.json();
            if (apiResponse.status === 200 && response.data?.token) {
                Cookies.set('bearer_token', response.data.token, { expires: 1 });
                router.push('home');
            } else {
                setErrorMessage(response.message);
            }
        }
    };

    return (
        <>
            <div className="flex flex-col h-screen justify-center">
                <div className="bg-slate-100 text-slate-950 px-[16px] py-[32px] w-[500px] m-auto rounded-[10px] text-center">
                    <h1 className="text-3xl py-[12px] text-center">LOGIN</h1>
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
                        <button
                            className="w-[calc(85%)] p-[12px] bg-indigo-700 text-white rounded-[10px] disabled:bg-indigo-400"
                            disabled={!formFilled}
                            onClick={authenticate}
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
            {errorMessage && <Alert message={errorMessage} type="error" />}
        </>
    );
}
