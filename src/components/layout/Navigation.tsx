'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const outlineRef = useRef<HTMLSpanElement>(null);

  // Danh sách các section trên trang chủ
  const sectionIds = ['hero', 'features', 'benefits', 'demo', 'pricing', 'faq'];
  const activeSection = useScrollSpy(sectionIds);

  // Hàm di chuyển indicator
  const moveIndicator = (element: HTMLElement) => {
    if (!navRef.current || !element) return;
    
    const rect = element.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    const x = rect.left - navRect.left;
    const w = rect.width;
    
    navRef.current.style.setProperty('--x', `${x}px`);
    navRef.current.style.setProperty('--w', `${w}px`);
  };

  // Effect để di chuyển indicator khi activeSection thay đổi
  useEffect(() => {
    if (!navRef.current) return;
    
    const activeButton = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
    if (activeButton) {
      moveIndicator(activeButton);
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    // Kiểm tra nếu đang chạy trên client-side
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset cho fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top" style={{backgroundColor: '#212529'}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo và tên công ty */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <span className="fw-bold text-light fs-5">BizHKD</span>
              <div className="small text-light opacity-75">AI Kế Toán</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation với Tab Indicator */}
        <div className="d-none d-lg-flex align-items-center">
          <nav 
            ref={navRef}
            className="tabs"
            style={{
              '--x': '0px',
              '--w': '0px', 
              '--h': '36px',
              '--r': '10px'
            } as React.CSSProperties}
          >
            <button 
              data-section="hero"
              className={`tab ${activeSection === 'hero' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('hero')}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
            >
              Trang chủ
            </button>
            <button 
              data-section="features"
              className={`tab ${activeSection === 'features' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('features')}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
            >
              Tính năng
            </button>
            <button 
              data-section="benefits"
              className={`tab ${activeSection === 'benefits' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('benefits')}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
            >
              Lợi ích
            </button>
            <button 
              data-section="demo"
              className={`tab ${activeSection === 'demo' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('demo')}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
            >
              Demo
            </button>
            <button 
              data-section="pricing"
              className={`tab ${activeSection === 'pricing' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('pricing')}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
            >
              Bảng giá
            </button>
            <button 
              data-section="faq"
              className={`tab ${activeSection === 'faq' ? 'is-active' : ''}`}
              onClick={() => scrollToSection('faq')}
              onMouseEnter={(e) => moveIndicator(e.currentTarget)}
              onFocus={(e) => moveIndicator(e.currentTarget)}
            >
              FAQ
            </button>

            {/* 2 lớp chỉ báo dùng chung */}
            <span ref={glowRef} className="indicator glow"></span>
            <span ref={outlineRef} className="indicator outline"></span>
          </nav>
          
        </div>

        {/* Mobile Navigation */}
        <div className="d-lg-none">
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Mobile Menu */}
          <div className={`position-absolute top-100 start-0 w-100 bg-dark shadow-lg ${isMenuOpen ? 'd-block' : 'd-none'}`} style={{zIndex: 1000}}>
            <div className="container py-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('hero');
                      setIsMenuOpen(false);
                    }}
                    className={`nav-link fw-medium py-2  bg-transparent w-100 text-start transition-all duration-300 px-3 rounded ${
                      activeSection === 'hero' 
                        ? 'text-white fw-bold shadow-lg active' 
                        : 'text-light hover:text-primary hover:bg-primary hover:bg-opacity-10'
                    }`}
                    style={activeSection === 'hero' ? {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                    } : {}}
                  >
                    Trang chủ
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('features');
                      setIsMenuOpen(false);
                    }}
                    className={`nav-link fw-medium py-2  bg-transparent w-100 text-start transition-all duration-300 px-3 rounded ${
                      activeSection === 'features' 
                        ? 'text-white fw-bold shadow-lg active' 
                        : 'text-light hover:text-primary hover:bg-primary hover:bg-opacity-10'
                    }`}
                    style={activeSection === 'features' ? {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                    } : {}}
                  >
                    Tính năng
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('benefits');
                      setIsMenuOpen(false);
                    }}
                    className={`nav-link fw-medium py-2  bg-transparent w-100 text-start transition-all duration-300 px-3 rounded ${
                      activeSection === 'benefits' 
                        ? 'text-white fw-bold shadow-lg active' 
                        : 'text-light hover:text-primary hover:bg-primary hover:bg-opacity-10'
                    }`}
                    style={activeSection === 'benefits' ? {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                    } : {}}
                  >
                    Lợi ích
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('demo');
                      setIsMenuOpen(false);
                    }}
                    className={`nav-link fw-medium py-2  bg-transparent w-100 text-start transition-all duration-300 px-3 rounded ${
                      activeSection === 'demo' 
                        ? 'text-white fw-bold shadow-lg active' 
                        : 'text-light hover:text-primary hover:bg-primary hover:bg-opacity-10'
                    }`}
                    style={activeSection === 'demo' ? {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                    } : {}}
                  >
                    Demo
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('pricing');
                      setIsMenuOpen(false);
                    }}
                    className={`nav-link fw-medium py-2  bg-transparent w-100 text-start transition-all duration-300 px-3 rounded ${
                      activeSection === 'pricing' 
                        ? 'text-white fw-bold shadow-lg active' 
                        : 'text-light hover:text-primary hover:bg-primary hover:bg-opacity-10'
                    }`}
                    style={activeSection === 'pricing' ? {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                    } : {}}
                  >
                    Bảng giá
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('faq');
                      setIsMenuOpen(false);
                    }}
                    className={`nav-link fw-medium py-2  bg-transparent w-100 text-start transition-all duration-300 px-3 rounded ${
                      activeSection === 'faq' 
                        ? 'text-white fw-bold shadow-lg active' 
                        : 'text-light hover:text-primary hover:bg-primary hover:bg-opacity-10'
                    }`}
                    style={activeSection === 'faq' ? {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                    } : {}}
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
