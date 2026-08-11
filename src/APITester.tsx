import {useRef, type FormEvent, useState} from "react";

export function APITester() {

    const [products, setProducts] = useState([])

    function myButtonHasBeenClicked() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(p => {
                setProducts(p.products)
            });
    }
    return (
        <div className="api-tester">
            <button
                onClick={myButtonHasBeenClicked}>
                Click me to send request to some webserver
            </button>
            {JSON.stringify(products)}
        </div>

    );
}
