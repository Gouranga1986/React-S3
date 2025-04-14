import React, { useState, useEffect,} from 'react';
import { Button } from '@vds/buttons';
import { Input } from '@vds/inputs';
import { DropdownSelect } from '@vds/selects';

const SetSchedule = ({ title, subtitle, currentPage, selectDaysTitle, days, startTimeTitle, deviceGroupData, isManage,
    clearSchedule, endTimeTitle, back, backHandler, cancel, openCancelModal, next, nextHandler, skip, skipHandler }) => {

    const createArray = (length, fromZero) => Array.from({ length }, (val, index) => (fromZero ? index : (index + 1)).toString().padStart(2, 0));
    const hoursArray = createArray(12);
    const minutesArray = createArray(60, true);

    const [selectedDays, setSelectedDays] = useState([]);
    const [initHideEndTime, setInitHideEndTime] = useState(true);
    const [startHour, setStartHour] = useState('12');
    const [startMinute, setStartMinute] = useState('00');
    const [startPeriod, setStartPeriod] = useState('AM');
    const [endHour, setEndHour] = useState('12');
    const [endMinute, setEndMinute] = useState('00');
    const [endPeriod, setEndPeriod] = useState('AM');

    
    const toggleDaysOfWeekSelection = (dayIndex) => {
        let tempDays = [...selectedDays];
        if (tempDays.includes(dayIndex)) tempDays.splice(tempDays.indexOf(dayIndex), 1);
        else tempDays.push(dayIndex);
        setSelectedDays(tempDays);
    }

    const clearScheduleHandler = () => {
        setSelectedDays([]);
        setStartHour('12');
        setStartMinute('00');
        setStartPeriod('AM');
        setEndHour('12');
        setEndMinute('00');
    }

    useEffect(() => {
        if (selectedDays?.length > 0) setInitHideEndTime(false);
    }, [selectedDays]);

    useEffect(() => {
        if (deviceGroupData?.schedule?.daysOfTheWeek?.length > 0) {
            setSelectedDays(deviceGroupData?.schedule?.daysOfTheWeek);
            const scheduleData = deviceGroupData?.schedule;
            setStartHour(scheduleData?.startTimeHour);
            setStartMinute(scheduleData?.startTimeMinute);
            setStartPeriod(scheduleData?.startTimeAmPm);
            setEndHour(scheduleData?.stopTimeHour);
            setEndMinute(scheduleData?.stopTimeMinute);
            setEndPeriod(scheduleData?.stopTimeAmPm);
        }
    }, [deviceGroupData]);

    return <>
        <div className='left-pane-title select-devices-title'>{title}</div>
        <div className='left-pane-subtitle'>{subtitle}</div>
        <div className={'left-pane-body ' + currentPage}>

            <div className='downtime-selection-container'>
                <div className='downtime-selection-days'>
                    <div className='downtime-selection-days-title'>{selectDaysTitle}</div>
                    <div className='downtime-selection-days-box-container'>
                        {days?.map((day, dayIndex) => <div key={'day-' + day}
                            className={'downtime-selection-day-box ' + (selectedDays.includes(dayIndex) ? 'selected-day' : '')}
                            onClick={() => toggleDaysOfWeekSelection(dayIndex)}
                        >{day}</div>)}
                    </div>
                </div>
                <div className='downtime-selection-time-container'>
                    <div className='downtime-selection-time-container start-time'>
                    {!initHideEndTime && <>
                    <div className='downtime-selection-time-title start-time'>{startTimeTitle}</div>
                        <div className='downtime-selection-time-dropdown-container start-time'>
                            <div className='downtime-selection-time-hour start-time' data-testid='start-time-hour'>
                                <DropdownSelect readOnly={selectedDays?.length === 0}  onChange={(e) => setStartHour(e?.target?.value)}>
                                    {hoursArray.map(hourValue => <option selected={startHour === hourValue} key={'start-hour-val-' + hourValue}>{hourValue}</option>)}
                                </DropdownSelect>
                            </div>
                            <div className='downtime-selection-time-colon start-time'>:</div>
                            <div className='downtime-selection-time-minute start-time' data-testid='start-time-minute'>
                                <DropdownSelect readOnly={selectedDays?.length === 0} onChange={(e) => setStartMinute(e?.target?.value)}>
                                    {minutesArray.map(minuteValue => <option selected={startMinute === minuteValue} key={'start-minute-val-' + minuteValue}>{minuteValue}</option>)}
                                </DropdownSelect>
                            </div>
                            <div className={'downtime-selection-time-am-pm start-time ' + (selectedDays?.length === 0 ? 'period-disabled' : '')}>
                                {['AM', 'PM'].map(val => <div key={'start-' + val} data-testid={'start-time-period-' + val.toLowerCase()} onClick={() => selectedDays?.length > 0 && setStartPeriod(val)}
                                    className={`downtime-selection-time-${val.toLowerCase()} start-time`}>
                                    <div className={`downtime-selection-time-${val.toLowerCase()}-radio start-time`}>
                                        {(startPeriod === val) && <div className={`downtime-selection-time-${val.toLowerCase()}-radio-selection start-time`}></div>}
                                    </div>
                                    <div className={`downtime-selection-time-${val.toLowerCase()}-label start-time`}>{val}</div>
                                </div>)}
                            </div>
                        </div>
                            <div className='downtime-selection-time-title end-time'>{endTimeTitle}</div>
                            <div className='downtime-selection-time-dropdown-container end-time'>
                                <div className='downtime-selection-time-hour end-time' data-testid='end-time-hour'>
                                    <DropdownSelect readOnly={selectedDays.length === 0} onChange={(e) => setEndHour(e?.target?.value)}>
                                        {hoursArray.map(hourValue => <option selected={endHour === hourValue} key={'end-hour-val-' + hourValue}>{hourValue}</option>)}
                                    </DropdownSelect>
                                </div>
                                <div className='downtime-selection-time-colon end-time'>:</div>
                                <div className='downtime-selection-time-minute end-time' data-testid='end-time-minute'>
                                    <DropdownSelect readOnly={selectedDays.length === 0} onChange={(e) => setEndMinute(e?.target?.value)}>
                                        {minutesArray.map(minuteValue => <option selected={endMinute === minuteValue} key={'end-minute-val-' + minuteValue}>{minuteValue}</option>)}
                                    </DropdownSelect>
                                </div>
                                <div className={'downtime-selection-time-am-pm end-time ' + (selectedDays.length === 0 ? 'period-disabled' : '')}>
                                    {['AM', 'PM'].map(val => <div key={'end-' + val} data-testid={'end-time-period-' + val.toLowerCase()} onClick={() => selectedDays.length > 0 && setEndPeriod(val)}
                                        className={`downtime-selection-time-${val.toLowerCase()} end-time`}>
                                        <div className={`downtime-selection-time-${val.toLowerCase()}-radio end-time`}>
                                            {(endPeriod === val) && <div className={`downtime-selection-time-${val.toLowerCase()}-radio-selection end-time`}></div>}
                                        </div>
                                        <div className={`downtime-selection-time-${val.toLowerCase()}-label end-time`}>{val}</div>
                                    </div>)}
                                </div>
                            </div>
                            {(selectedDays.length > 0) && <div className='downtime-selection-clear-schedule' ><span onClick={clearScheduleHandler}>{clearSchedule}</span></div>}
                        </>}
                    </div>
                </div>
            </div>

            <div className='device-group-buttons'>
                {(selectedDays.length > 0) ?
                    <Button disabled={(startHour === endHour) && (startMinute === endMinute) && (startPeriod === endPeriod)}
                        onClick={() => nextHandler({ selectedDays, startHour, startMinute, endHour, endMinute, startPeriod, endPeriod })}>{next}</Button> :
                    <Button onClick={skipHandler}>{skip}</Button>}
                    {console.log(startHour, startMinute, startPeriod, endHour, endMinute, endPeriod, selectedDays)}
                <Button use='secondary' onClick={backHandler}>{back}</Button>
            </div>
            {!isManage && <div className='cancel-link-container' onClick={openCancelModal}>{cancel}</div>}
        </div>
    </>;
}

export default SetSchedule;
