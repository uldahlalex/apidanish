import {useRef, type FormEvent} from "react";

export function APITester() {

    function myButtonHasBeenClicked() {
        
    }
    return (
        <div className="api-tester">
            <button
                onClick={myButtonHasBeenClicked}>
                Click me to send request to some webserver
            </button>
        </div>

    );
}
