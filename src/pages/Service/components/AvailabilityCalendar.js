// src/pages/Service/components/AvailabilityCalendar.js - Enhanced for better desktop layout

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AvailabilityCalendar.css';

/**
 * Modern, responsive calendar component for booking appointments
 * Optimized for both mobile and desktop experiences
 * 
 * @param {Object} props - Component props
 * @param {string} props.businessName - Name of the business
 * @param {Array} props.availableDates - Array of dates that are available
 * @param {Function} props.onTimeSlotSelect - Callback when a time slot is selected
 * @returns {JSX.Element} Rendered component
 */
const AvailabilityCalendar = ({ businessName, availableDates, onTimeSlotSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Enhanced time slots with availability status
  const timeSlots = useMemo(() => [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:30 AM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '4:00 PM', available: true }
  ], []);
  
  /**
   * Determines if a date should be marked as available
   */
  const getTileClassName = useCallback(({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      // Mark weekdays as available (except Monday)
      return day !== 0 && day !== 1 ? 'available-day' : null;
    }
    return null;
  }, []);
  
  /**
   * Handles date selection from calendar
   */
  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setIsLoading(true);
    
    // Simulate loading time slots
    setTimeout(() => {
      setShowTimeSlots(true);
      setIsLoading(false);
      
      // Scroll to time slots on mobile devices
      if (window.innerWidth < 1024) {
        const timeSlotSection = document.getElementById('time-slot-section');
        if (timeSlotSection) {
          timeSlotSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 300);
  }, []);
  
  /**
   * Handles time slot selection
   */
  const handleTimeSlotSelect = useCallback((timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    
    if (onTimeSlotSelect && selectedDate) {
      onTimeSlotSelect({
        date: selectedDate,
        time: timeSlot
      });
    }
  }, [selectedDate, onTimeSlotSelect]);
  
  /**
   * Formats the date for display
   */
  const formatDate = useCallback((date) => {
    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  }, []);

  /**
   * Formats the date for screen readers
   */
  const formatDateForA11y = useCallback((date) => {
    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, []);
  
  // Reset time slots when component unmounts
  useEffect(() => {
    return () => {
      setShowTimeSlots(false);
      setSelectedDate(null);
      setSelectedTimeSlot(null);
    };
  }, []);
  
  return (
    <div className="availability-container" data-testid="availability-calendar">
    
      
      <div className="calendar-section">
        <div className="calendar-wrapper">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate || new Date()}
            className="modern-calendar"
            tileClassName={getTileClassName}
            minDate={new Date()}
            prev2Label={null}
            next2Label={null}
            minDetail="month"
            navigationLabel={({ date }) => (
              <span className="calendar-nav-label">
                {date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
              </span>
            )}
          />
        </div>
        
        {!selectedDate && !isLoading && (
          <div className="date-selection-prompt">
            <svg aria-hidden="true" className="prompt-icon" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <p>Please select a date to view available time slots</p>
          </div>
        )}
      </div>
      
      {isLoading && (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Loading available times...</p>
        </div>
      )}
      
      {selectedDate && showTimeSlots && !isLoading && (
        <section 
          id="time-slot-section"
          className="time-slot-section" 
          aria-labelledby="time-slot-heading"
        >
          <h3 id="time-slot-heading" className="time-slot-heading">
            <span className="selected-date">{formatDate(selectedDate)}</span>
            <span className="visually-hidden">Select a time slot for {formatDateForA11y(selectedDate)}</span>
          </h3>
          
          <div className="time-slot-grid" role="radiogroup" aria-label="Available appointment times">
            {timeSlots.map((slot, index) => (
              <button 
                key={`time-${index}`} 
                className={`time-slot-button ${selectedTimeSlot === slot.time ? 'selected' : ''}`}
                onClick={() => handleTimeSlotSelect(slot.time)}
                aria-pressed={selectedTimeSlot === slot.time}
                role="radio"
                aria-checked={selectedTimeSlot === slot.time}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
          
          <div className="booking-status">
            {selectedTimeSlot ? (
              <>
                <div className="selected-slot-info">
                  <svg aria-hidden="true" className="status-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>
                    {formatDate(selectedDate)} at {selectedTimeSlot}
                  </span>
                </div>
                <button 
                  className="book-button"
                  aria-label={`Book appointment for ${formatDateForA11y(selectedDate)} at ${selectedTimeSlot}`}
                >
                  Confirm Booking
                </button>
              </>
            ) : (
              <p className="select-prompt">
                <svg aria-hidden="true" className="status-icon" viewBox="0 0 24 24">
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2V6h-2v3z" />
                </svg>
                <span>Select a time to book your appointment</span>
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

AvailabilityCalendar.propTypes = {
  businessName: PropTypes.string.isRequired,
  availableDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  onTimeSlotSelect: PropTypes.func
};

AvailabilityCalendar.defaultProps = {
  availableDates: [],
  onTimeSlotSelect: null
};

export default AvailabilityCalendar;