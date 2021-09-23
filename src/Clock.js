import React from 'react'
import { getTimeString } from './getTimeString';

const Clock = () => {
    const [clock, setClock] = React.useState(getTimeString(new Date()));
    React.useEffect(() => {
        const interval = setInterval(() => {
            const newClock = getTimeString(new Date());
                setClock(newClock)
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    return <div>{clock}</div>;
}

export default Clock;