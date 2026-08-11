import {useRef, type FormEvent, useState, useEffect, type ChangeEvent} from "react";

export interface MyRegisterForm {
    email: string;
    password: string;
}

export function APITester() {

    const [myRegisterForm, setMyRegisterForm] = useState<MyRegisterForm>({
        email: 'your@email.com',
        password: ''
    })


    return (
        <div className="api-tester">
            <input type="email"
                   onChange={e =>
                       setMyRegisterForm({...myRegisterForm, email: e.target.value})}
                   value={myRegisterForm.email}/>
            <input type="password" value={myRegisterForm.password}/>
            <button>Send</button>

        </div>

    );


}
