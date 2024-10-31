import {useState} from "react";

const LoginComponent = () => {

    const[number, chengeNumber] = useState(6)

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => chengeNumber(number + 1)}>add</button>
            <button onClick={() => chengeNumber(number - 1)}>add</button>
        </div>
    );
};

export default LoginComponent;