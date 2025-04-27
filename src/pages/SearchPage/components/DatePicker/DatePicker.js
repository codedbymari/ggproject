import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './DatePicker.css';

/* DatePicker Component
 */
const DatePicker = ({ selectedDate, setSelectedDate, onClose, datePanelRef }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Get current date info
  const today = new Date();
  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();
  
  // Get month name
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  
  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  
  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1).getDay();
  const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 
  
  // Generate calendar days
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonthIndex, day);
    const isToday = date.toDateString() === today.toDateString();
    const isSelected = selectedDate === `${monthName} ${day}, ${currentYear}`;
    const isPast = date < today && !isToday;
    
    calendarDays.push(
      <div 
        key={day} 
        className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isPast ? 'past' : ''}`}
        onClick={() => {
          if (!isPast) {
            setSelectedDate(`${monthName} ${day}, ${currentYear}`);
          }
        }}
      >
        {day}
      </div>
    );
  }
  
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex - 1, 1));
  };
  
  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex + 1, 1));
  };
  
  // Check if previous month button should be disabled
  const isPreviousMonthDisabled = 
    currentYear === today.getFullYear() && 
    currentMonthIndex === today.getMonth();

  return (
    <div className="date-picker-panel" ref={datePanelRef}>
      <div className="date-picker-header">
        <h3>Select Date</h3>
        <button className="close-btn" onClick={onClose} aria-label="Close date picker">
          <FaTimes />
        </button>
      </div>
      
      {/* Quick date selection options */}
      <div className="date-options">
        <button 
          className={`date-option ${selectedDate === 'Any Date' ? 'active' : ''}`}
          onClick={() => setSelectedDate('Any Date')}
        >
          Any Date
        </button>
        <button 
          className={`date-option ${selectedDate === 'Today' ? 'active' : ''}`}
          onClick={() => setSelectedDate('Today')}
        >
          Today
        </button>
        <button 
          className={`date-option ${selectedDate === 'Tomorrow' ? 'active' : ''}`}
          onClick={() => setSelectedDate('Tomorrow')}
        >
          Tomorrow
        </button>
        <button 
          className={`date-option ${selectedDate === 'This Week' ? 'active' : ''}`}
          onClick={() => setSelectedDate('This Week')}
        >
          This Week
        </button>
      </div>
      
      {/* Calendar view */}
      <div className="calendar-container">
        <div className="calendar-header">
          <button 
            className="month-nav prev"
            onClick={goToPreviousMonth}
            disabled={isPreviousMonthDisabled}
            aria-label="Previous month"
          >
            <FaChevronLeft />
          </button>
          <div className="current-month">
            {monthName} {currentYear}
          </div>
          <button 
            className="month-nav next"
            onClick={goToNextMonth}
            aria-label="Next month"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className="calendar-grid">
          {/* Day headers */}
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
          
          {/* Calendar days */}
          {calendarDays}
        </div>
      </div>
      
      <div className="date-actions">
        <button className="apply-date-btn" onClick={onClose}>
          Apply Date
        </button>
      </div>
    </div>
  );
};

export default DatePicker;