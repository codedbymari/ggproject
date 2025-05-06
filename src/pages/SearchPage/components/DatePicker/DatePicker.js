import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './DatePicker.css';

const DatePicker = ({ selectedDate, setSelectedDate, onClose, datePanelRef }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const datePickerRef = useRef(null);
  
  // Calculate position of date picker on mount and window resize
  useEffect(() => {
    const positionDatePicker = () => {
      // Get the date button position
      if (datePanelRef && datePanelRef.current && datePickerRef.current) {
        const dateButtonRect = document.querySelector('.date-btn').getBoundingClientRect();
        const searchPanel = document.querySelector('.search-panel');
        const searchPanelRect = searchPanel.getBoundingClientRect();
        
        // Set position for desktop
        if (window.innerWidth > 768) {
          datePickerRef.current.style.top = `${dateButtonRect.bottom + window.scrollY}px`;
          datePickerRef.current.style.left = `${dateButtonRect.left}px`;
          
          const datePickerWidth = 320; 
          if (dateButtonRect.left + datePickerWidth > window.innerWidth) {
            datePickerRef.current.style.left = `${dateButtonRect.right - datePickerWidth}px`;
          }
        }
      }
    };

    positionDatePicker();
    window.addEventListener('resize', positionDatePicker);
    
    return () => {
      window.removeEventListener('resize', positionDatePicker);
    };
  }, [datePanelRef]);
  
  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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
    
  // Reset date selection
  const resetDateSelection = () => {
    setSelectedDate('Any Date');
  };

  // DatePicker content
  const datePickerContent = (
    <div className="date-picker-panel" ref={(node) => {
      // Set both refs - the one from props and our local one
      if (datePanelRef) datePanelRef.current = node;
      datePickerRef.current = node;
    }}>
      <div className="date-picker-header">
        <h3>{isMobile ? 'Select a date' : 'Select Date'}</h3>
        <div className="header-buttons">
         
          <button className="close-btn" onClick={onClose} aria-label="Close date picker">
            <FaTimes />
          </button>
        </div>
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
        <button className="reset-date-btn" onClick={resetDateSelection}>
          {isMobile ? 'Reset' : 'Reset Date'}
        </button>
        <button className="apply-date-btn" onClick={onClose}>
          {isMobile ? 'Apply' : 'Apply Date'}
        </button>
      </div>
    </div>
  );

  return createPortal(datePickerContent, document.body);
};

export default DatePicker;