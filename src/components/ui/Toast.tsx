'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
  position = 'top-right'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  }, [onClose, id]);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto close after duration
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, [duration, handleClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
        return 'fas fa-exclamation-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'info':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-info-circle';
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'success':
        return 'text-success';
      case 'error':
        return 'text-danger';
      case 'warning':
        return 'text-warning';
      case 'info':
        return 'text-info';
      default:
        return 'text-info';
    }
  };

  const positionClasses = {
    'top-right': 'top-0 end-0',
    'top-left': 'top-0 start-0',
    'bottom-right': 'bottom-0 end-0',
    'bottom-left': 'bottom-0 start-0',
    'top-center': 'top-0 start-50 translate-middle-x',
    'bottom-center': 'bottom-0 start-50 translate-middle-x'
  };

  return (
    <div 
      className={`toast-container position-fixed ${positionClasses[position]} p-3`}
      style={{ zIndex: 9999 }}
    >
      <div 
        className={`toast show ${isVisible ? 'toast-enter' : ''} ${isLeaving ? 'toast-leave' : ''}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-dark text-white">
          <i className={`${getIcon()} ${getColorClass()} me-2`}></i>
          <strong className="me-auto">{title}</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>
        {message && (
          <div className="toast-body bg-light text-dark">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Toast;
