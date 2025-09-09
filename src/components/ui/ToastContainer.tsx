'use client';

import React, { useState, useCallback } from 'react';
import Toast from './Toast';

interface ToastItem {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContainerProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const ToastContainer: React.FC<ToastContainerProps> = ({ 
  position = 'top-right' 
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  // Expose addToast globally
  React.useEffect(() => {
    (window as Window & { addToast?: typeof addToast }).addToast = addToast;
    return () => {
      delete (window as Window & { addToast?: typeof addToast }).addToast;
    };
  }, [addToast]);

  return (
    <div className="toast-wrapper">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={removeToast}
          position={position}
        />
      ))}
    </div>
  );
};

// Helper functions for easy usage
export const showToast = {
  success: (title: string, message?: string, duration?: number) => {
    const windowWithToast = window as Window & { addToast?: (toast: Omit<ToastItem, 'id'>) => void };
    if (windowWithToast.addToast) {
      windowWithToast.addToast({ type: 'success', title, message, duration });
    }
  },
  error: (title: string, message?: string, duration?: number) => {
    const windowWithToast = window as Window & { addToast?: (toast: Omit<ToastItem, 'id'>) => void };
    if (windowWithToast.addToast) {
      windowWithToast.addToast({ type: 'error', title, message, duration });
    }
  },
  warning: (title: string, message?: string, duration?: number) => {
    const windowWithToast = window as Window & { addToast?: (toast: Omit<ToastItem, 'id'>) => void };
    if (windowWithToast.addToast) {
      windowWithToast.addToast({ type: 'warning', title, message, duration });
    }
  },
  info: (title: string, message?: string, duration?: number) => {
    const windowWithToast = window as Window & { addToast?: (toast: Omit<ToastItem, 'id'>) => void };
    if (windowWithToast.addToast) {
      windowWithToast.addToast({ type: 'info', title, message, duration });
    }
  }
};

export default ToastContainer;
