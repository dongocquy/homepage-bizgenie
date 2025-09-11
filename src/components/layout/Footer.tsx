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
                <span className="fw-bold fs-4 text-dark">BizHKD</span>
              </div>
              <p className="text-secondary mb-3">Phần mềm AI ghi sổ kế toán thông minh, giúp Hộ kinh doanh tiết kiệm thời gian và tránh sai sót về thuế.</p>
              <div className="company-info">
                <p className="text-dark mb-1"><strong>BIZGENIE TECH & SOLUTION COMPANY LIMITED</strong></p>
                <p className="text-dark mb-1">MST: 0318 123 456</p>
                <p className="text-dark mb-1">Giấy phép: 01/GP-BTTTT</p>
              </div>
            </div>
          </div>
          
          
          {/* Support and Contact Section */}
          <div className="col-lg-8">
            <div className="row g-4">
              {/* Support Column */}
              <div className="col-lg-6">
                <div className="support-section">
                  <h6 className="fw-bold mb-3 text-dark">Hỗ trợ</h6>
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
                  <h6 className="fw-bold mb-3 text-dark">Liên hệ</h6>
                  <div className="contact-info-simple">
                    <div className="contact-item-simple">
                      <i className="fas fa-map-marker-alt contact-icon"></i>
                      <span className="contact-text">Số 4 Phan Huy Ôn, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam</span>
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