'use client';

import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner text="Đang tải..." />,
  delay = 0,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              setHasLoaded(true);
            }, delay);
          }
        });
      },
      { threshold }
    );

    const element = document.getElementById('lazy-component');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  if (!hasLoaded) {
    return (
      <div id="lazy-component" className="lazy-component-placeholder">
        {fallback}
      </div>
    );
  }

  return (
    <div className={`lazy-component ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default LazyComponent;
