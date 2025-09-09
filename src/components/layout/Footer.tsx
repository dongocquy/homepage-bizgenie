'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-section bg-card">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div className="logo-svg-container">
                  <svg width="85" height="85" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="footerPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 1}} />
                      </linearGradient>
                      <linearGradient id="footerOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#F97316', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#EA580C', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    
                    {/* 8-pointed star (Purple) */}
                    <g transform="translate(15, 30)">
                      <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="url(#footerPurpleGradient)"/>
                    </g>
                    
                    {/* Letter E (Purple) */}
                    <g transform="translate(35, 20)">
                      <path d="M0 0 L0 20 L15 20 M0 10 L12 10 M0 0 L15 0" 
                            fill="none" stroke="url(#footerPurpleGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    
                    {/* Letter G (Orange) */}
                    <g transform="translate(45, 20)">
                      <path d="M15 0 L0 0 Q-2 0 -2 2 L-2 18 Q-2 20 0 20 L15 20 Q17 20 17 18 L17 15 Q17 13 15 13 L8 13" 
                            fill="none" stroke="url(#footerOrangeGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    
                    {/* Vertical separator line (Orange) */}
                    <line x1="75" y1="15" x2="75" y2="45" stroke="url(#footerOrangeGradient)" strokeWidth="2"/>
                    
                    {/* BIZGENIE TECH text (Orange) */}
                    <text x="85" y="25" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="url(#footerOrangeGradient)">BIZGENIE TECH</text>
                    
                    {/* & SOLUTIONS text (Orange, larger) */}
                    <text x="85" y="40" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="url(#footerOrangeGradient)">& SOLUTIONS</text>
                  </svg>
                </div>
                <span className="fw-bold fs-4">BizHKD</span>
              </div>
              <p className="text-secondary mb-3">Phần mềm AI ghi sổ kế toán thông minh, giúp Hộ kinh doanh tiết kiệm thời gian và tránh sai sót về thuế.</p>
              <div className="company-info">
                <p className="text-secondary mb-1"><strong>Công ty TNHH BizGenie</strong></p>
                <p className="text-secondary mb-1">MST: 0318 123 456</p>
                <p className="text-secondary mb-1">Giấy phép: 01/GP-BTTTT</p>
              </div>
            </div>
          </div>
          
          
          {/* Support and Contact Section */}
          <div className="col-lg-8">
            <div className="row g-4">
              {/* Support Column */}
              <div className="col-lg-6">
                <div className="support-section">
                  <h6 className="fw-bold mb-3 text-white">Hỗ trợ</h6>
                  <div className="support-links">
                    <Link href="#" className="support-link">Trung tâm trợ giúp</Link>
                    <Link href="#" className="support-link">Video hướng dẫn</Link>
                    <Link href="#faq" className="support-link">FAQ</Link>
                    <Link href="#contact" className="support-link">Liên hệ</Link>
                  </div>
                </div>
              </div>
              
              {/* Contact Column */}
              <div className="col-lg-6">
                <div className="contact-section">
                  <h6 className="fw-bold mb-3 text-white">Liên hệ</h6>
                  <div className="contact-info-simple">
                    <div className="contact-item-simple">
                      <i className="fas fa-map-marker-alt contact-icon"></i>
                      <span className="contact-text">Số 4 Phan Huy Ôn, Phường Trung Mỹ Tây, Quận 12, TP.HCM</span>
                    </div>
                    <div className="contact-item-simple">
                      <i className="fas fa-phone contact-icon"></i>
                      <a href="tel:0328866539" className="contact-text">032 8866 539</a>
                    </div>
                    <div className="contact-item-simple">
                      <i className="fas fa-mobile-alt contact-icon"></i>
                      <a href="tel:0917787708" className="contact-text">091 778 7708</a>
                    </div>
                    <div className="contact-item-simple">
                      <i className="fas fa-envelope contact-icon"></i>
                      <a href="mailto:contact@bizgenie.vn" className="contact-text">contact@bizgenie.vn</a>
                    </div>
                    <div className="contact-item-simple">
                      <span className="contact-text">Zalo: 091 778 7708</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="social-links-footer mt-4 text-center">
          <a href="https://facebook.com/bizhkd" target="_blank" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtube.com/@bizhkd" target="_blank" title="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://linkedin.com/bizhkd" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://zalo.me/0917787708" target="_blank" title="Zalo">
            <i className="fab fa-zalo"></i>
          </a>
        </div>
        
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-secondary">© 2025 BizHKD - Công ty TNHH BizGenie. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link href="#" className="text-secondary text-decoration-none me-3">Chính sách bảo mật</Link>
            <Link href="#" className="text-secondary text-decoration-none">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 