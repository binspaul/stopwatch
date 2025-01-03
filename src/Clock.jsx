import { useEffect, useState } from "react";

export default function Clock() {
    let [date, setDate] = useState('');

    function updateDate() {
        setDate(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
    }

    useEffect(() => {
        setTimeout(() => { updateDate()}, 1000);
    }, [date]);

    return <>{date}</>
};