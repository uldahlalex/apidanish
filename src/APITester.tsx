import {useRef, type FormEvent, useState, useEffect} from "react";

export function APITester() {

    const [data, setData] = useState()


    useEffect(() => {
        myOldFunction();
    }, []);

    async function myOldFunction() {
       const result = await fetch('/api/hello');
       const json = await result.json();
       setData(json)
    }

    return (
        <div className="api-tester">
            {
                JSON.stringify(data)
            }
        </div>

    );
}
