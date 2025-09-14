'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const outlineRef = useRef<HTMLSpanElement>(null);

  // Danh sách các section trên trang chủ
  const sectionIds = useMemo(() => ['hero', 'features', 'benefits', 'demo', 'pricing', 'faq'], []);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Simple scroll spy implementation
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

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

  // Đóng menu khi click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Ngăn scroll khi menu mở
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{backgroundColor: '#ffffff'}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo và tên công ty */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <span className="fw-bold text-dark fs-5">BizHKD</span>
              <div className="small text-secondary opacity-75">AI Kế Toán</div>
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
              Giải pháp
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
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          
          {/* Mobile Menu Backdrop */}
          {isMenuOpen && (
            <div 
              className="mobile-menu-backdrop"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-brand">
                <span className="fw-bold text-light fs-5">BizHKD</span>
                <div className="small text-light opacity-75">AI Kế Toán</div>
              </div>
              <button 
                className="mobile-menu-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="mobile-menu-content">
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('hero');
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      activeSection === 'hero' ? 'active' : ''
                    }`}
                  >
                    <i className="fas fa-home mobile-nav-icon"></i>
                    <span>Trang chủ</span>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('features');
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      activeSection === 'features' ? 'active' : ''
                    }`}
                  >
                    <i className="fas fa-cogs mobile-nav-icon"></i>
                    <span>Tính năng</span>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('benefits');
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      activeSection === 'benefits' ? 'active' : ''
                    }`}
                  >
                    <i className="fas fa-star mobile-nav-icon"></i>
                    <span>Lợi ích</span>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('demo');
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      activeSection === 'demo' ? 'active' : ''
                    }`}
                  >
                    <i className="fas fa-play mobile-nav-icon"></i>
                    <span>Demo</span>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('pricing');
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      activeSection === 'pricing' ? 'active' : ''
                    }`}
                  >
                    <i className="fas fa-tags mobile-nav-icon"></i>
                    <span>Bảng giá</span>
                  </button>
                </li>
                <li className="mobile-nav-item">
                  <button 
                    onClick={() => {
                      scrollToSection('faq');
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-nav-link ${
                      activeSection === 'faq' ? 'active' : ''
                    }`}
                  >
                    <i className="fas fa-question-circle mobile-nav-icon"></i>
                    <span>FAQ</span>
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
