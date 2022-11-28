import React, { useState } from 'react';
import Calendar from 'react-calendar';

//import { scheduleData } from '../testData/TestData';


//import { ScheduleComponent, Day, Week, Month, Inject,WorkWeek, Agenda, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule';
/*
        <ScheduleComponent height="650px" eventSettings= {{ dataSource: scheduleData}}>
            <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
        
        <CalendarComponent height="650px" eventSettings= {{ dataSource: scheduleData}}>

        </CalendarComponent>

*/

//import { CalendarComponent, Day, Week, Month, Inject } from '@syncfusion/ej2-react-calendars';



const Calendarto = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className='bg-white p-16 h-screen pt-72 shadow-xl'>
        <Calendar onChange={onChange} value={value} />
    </div>

  )
}

export default Calendarto