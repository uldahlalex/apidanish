import {useRef, type FormEvent, useState, useEffect} from "react";

export interface MyRegisterForm {
    email: string;
    password: string;
}

export function APITester() {

    const [data, setData] = useState<MyRegisterForm>({
        email: 'your@email.com',
        password: ''
    })


    return (
        <div className="api-tester">
            <input type="email" value={data.email} />
            <input type="password" value={data.password} />
            <button>Send</button>

        </div>

    );
}
