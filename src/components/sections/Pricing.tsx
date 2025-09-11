'use client';

import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-5 bg-card">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold mb-2">BẢNG GIÁ</h6>
          <h2 className="display-5 fw-bold mb-3 text-dark">Chọn gói phù hợp với bạn</h2>
          <p className="lead text-secondary">Phí minh bạch, cam kết linh hoạt</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card pricing-card-enhanced" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center mb-4">
                <h5 className="fw-bold mb-2 text-dark">Gói Starter</h5>
                <p className="text-secondary">Dành cho HKD mới bắt đầu</p>
                <div className="price">
                  <span className="currency">₫</span>
                  <span className="amount">299K</span>
                  <span className="period">/tháng</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i>Ghi sổ tự động cơ bản</li>
                <li><i className="fas fa-check"></i>Hỗ trợ kê khai thuế</li>
                <li><i className="fas fa-check"></i>5GB lưu trữ đám mây</li>
                <li><i className="fas fa-check"></i>Báo cáo cơ bản</li>
                <li><i className="fas fa-check"></i>Hỗ trợ qua email</li>
              </ul>
              <div className="text-center">
                <a href="https://bizgenie.vn/goi-starter---ai-ghi-so-ke-toan-bizhkd.html" className="btn btn-outline-primary w-100 btn-pricing">
                  <span>Đăng ký ngay</span>
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card pricing-card-enhanced pricing-card-popular" data-aos="fade-up" data-aos-delay="200">
              <div className="popular-badge">
                <i className="fas fa-star me-1"></i>
                Phổ biến nhất
              </div>
              <div className="text-center mb-4">
                <h5 className="fw-bold mb-2 text-dark">Gói Pro</h5>
                <p className="text-secondary">Dành cho HKD đang phát triển</p>
                <div className="price">
                  <span className="currency">₫</span>
                  <span className="amount">499K</span>
                  <span className="period">/tháng</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i>Tất cả tính năng gói Starter</li>
                <li><i className="fas fa-check"></i>Phân tích báo cáo nâng cao</li>
                <li><i className="fas fa-check"></i>20GB lưu trữ đám mây</li>
                <li><i className="fas fa-check"></i>Xuất báo cáo Excel/PDF</li>
                <li><i className="fas fa-check"></i>Hỗ trợ qua Zalo</li>
                <li><i className="fas fa-check"></i>Đào tạo sử dụng</li>
                <li><i className="fas fa-check"></i>Kế toán nộp báo cáo thuế và nhắc nộp báo cáo thuế</li>
              </ul>
              <div className="text-center">
                <a href="https://bizgenie.vn/goi-pro---ai-ghi-so-ke-toan-bizhkd.html" className="btn btn-gradient w-100 btn-pricing">
                  <span>Đăng ký ngay</span>
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card pricing-card-enhanced" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-4">
                <h5 className="fw-bold mb-2 text-dark">Gói Premium</h5>
                <p className="text-secondary">Dành cho HKD lớn</p>
                <div className="price">
                  <span className="currency">₫</span>
                  <span className="amount">699K</span>
                  <span className="period">/tháng</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check"></i>Tất cả tính năng gói Pro</li>
                <li><i className="fas fa-check"></i>Hỗ trợ 24/7</li>
                <li><i className="fas fa-check"></i>Lưu trữ không giới hạn</li>
                <li><i className="fas fa-check"></i>Tích hợp với phần mềm khác</li>
                <li><i className="fas fa-check"></i>API truy cập</li>
                <li><i className="fas fa-check"></i>Hỗ trợ tùy chỉnh</li>
              </ul>
              <div className="text-center">
                <a href="https://bizgenie.vn/goi-premium---ai-ghi-so-ke-toan-bizhkd.html" className="btn btn-outline-primary w-100 btn-pricing">
                  <span>Đăng ký ngay</span>
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Pricing; 