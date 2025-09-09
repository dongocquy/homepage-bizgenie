'use client';

import { useState, useEffect } from 'react';

interface ScrollSpyOptions {
  offset?: number;
  rootMargin?: string;
}

export const useScrollSpy = (sectionIds: string[], options: ScrollSpyOptions = {}) => {
  const { rootMargin = '0px 0px -20% 0px' } = options;
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Kiểm tra nếu đang chạy trên client-side
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Tìm phần nào đang hiển thị nhiều nhất trong viewport
        let maxRatio = 0;
        let currentSection = '';

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tính toán phần trăm hiển thị của section
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight;
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const sectionHeight = rect.height;
            const visibleRatio = visibleHeight / sectionHeight;

            if (visibleRatio > maxRatio) {
              maxRatio = visibleRatio;
              currentSection = entry.target.id;
            }
          }
        });

        // Nếu không có section nào đang hiển thị đáng kể, 
        // tìm section gần nhất với top của viewport
        if (!currentSection) {
          let closestSection = '';
          let minDistance = Infinity;

          sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const distance = Math.abs(rect.top);
              
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = id;
              }
            }
          });

          if (closestSection) {
            currentSection = closestSection;
          }
        }

        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      },
      {
        rootMargin,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    // Quan sát tất cả các section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, rootMargin, activeSection]);

  return activeSection;
};

export default useScrollSpy;
