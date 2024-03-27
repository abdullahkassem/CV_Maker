import { useState } from 'react';

function HeaderButton(prop){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1); // Update state to trigger re-render
        console.log(count+1);
    };

    return (
        <button onClick={handleClick} className="headerButton">{prop.text}</button>
    )
}

export default HeaderButton;