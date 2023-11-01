import { useState } from 'react';

export default function Timer(props) {
    // let time = 0;

    const [time, setTime] = useState(props.startTime); //Pass initial state

    //Note: Don't use setTimeout, useEffect is more appropriate 
    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h3>Timer</h3>

            <p>Time is : {time}</p>

        </div>
    );
}