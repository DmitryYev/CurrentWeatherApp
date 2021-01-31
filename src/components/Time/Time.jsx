import React, { useState, useEffect } from 'react';
import './time.css';

const Time = ({ className }) => {
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const newDate = new Date();

    const [time, setTime] = useState(newDate.toLocaleTimeString([], timeOptions));
    const [date, setDate] = useState(newDate.toLocaleDateString('en-GB', dateOptions));

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString([], timeOptions));
        }, 5000)
        return () => clearInterval(timeInterval)
    });

    useEffect(() => {
        const date = new Date();
        setDate(date.toLocaleDateString('en-GB', dateOptions));
    }, [time])

    return (
        <div className={className}>
            <div className="date">{date}</div>
            <div className="time">{time}</div>
        </div>
    )
}

export default Time;