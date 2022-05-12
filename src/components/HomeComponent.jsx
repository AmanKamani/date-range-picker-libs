import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function HomeComponent() {

    const [dateRange, setDateRangeChange] = useState([new Date(), new Date()]);

    const onDateRangeChange = (value) => {
        if(value){
            const start = value[0].toLocaleDateString();
            const end = value[1].toLocaleDateString();
        
            alert(`start = ${start}\n end = ${end}`)
        }
        setDateRangeChange(value);
    }

    const dateRangePickerProps = {
        format: 'MMMM-dd-yyyy',
        onChange: onDateRangeChange,
        value: dateRange
    }


    return (<>
        <h4>Date Rage Picker - rsuite</h4>
        <DateRangePicker {...dateRangePickerProps}/> <br /> <br />
    </>)
}

export default HomeComponent