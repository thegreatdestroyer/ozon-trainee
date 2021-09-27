import React from 'react'
import { getTime } from '../../utils/getTime';
import './Clock.css';


const Clock = () => {
    const [hours, setHours] = React.useState('00');
    const [minutes, setMinutes] = React.useState('00');
    const [seconds, setSeconds] = React.useState('00');
    
    React.useEffect(() => {
            const {hours, minutes, seconds} = getTime(new Date());
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        const interval = setInterval(() => {
            const {hours, minutes, seconds} = getTime(new Date());
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
           <div className="clock">
           <div className="time">{hours}</div>
           <div classeName="literal">:</div>
           <div className="time">{minutes}</div>
           <div classeName="literal">:</div>
           <div className="time">{seconds}</div>
           </div>
    )
}

export default Clock;