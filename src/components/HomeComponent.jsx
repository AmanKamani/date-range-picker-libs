import React, { useRef, useState } from 'react'
import {DateRangePicker, Button} from 'rsuite'
import "rsuite/dist/rsuite.min.css";    

function HomeComponent() {

    const [range, setRange] = useState();

    const onDateRangeOk = (value) => {
        const start = new Date(value[0]).toLocaleDateString();
        const end = new Date(value[1]).toLocaleDateString();

        alert(`start = ${start}\n end = ${end}`)
    }

    const dateRangeProps = {
        showOneCalendar: true,
        character: ' - ',
        ranges: [],
        format: 'MMMM dd, yyyy',
        onOk: onDateRangeOk,
        preventOverflow: true
    }

    return (<>
        <h4>Date Rage Picker - rsuite</h4>
        <DateRangePicker placeholder="choose date range" {...dateRangeProps}/> <br /> <br />
    </>)
}

export default HomeComponent