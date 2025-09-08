'use client';

import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-4 benefits-section bg-secondary">
      <div className="container">
        <div className="text-center mb-4">
          <h6 className="text-primary fw-bold mb-2">
            LỢI ÍCH VƯỢT TRỘI
          </h6>
          <h2 className="display-6 fw-bold mb-3">
            Tại sao BizHKD là lựa chọn tốt nhất?
          </h2>
          <p className="lead text-secondary">
            Giải pháp toàn diện giúp Hộ kinh doanh phát triển bền vững và tối ưu hóa quy trình kế toán
          </p>
        </div>
        
        <div className="row g-4 mb-4">
          {/* Bên trái - Main benefit card */}
          <div className="col-lg-6">
            <div className="benefit-left-section h-100">
              <div className="benefit-main-card p-4 rounded-4 shadow-lg h-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <div className="benefit-icon-large me-4">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2">Hiệu Quả Tối Đa</h3>
                    <p className="text-secondary mb-0">Tự động hóa toàn bộ quy trình kế toán</p>
                  </div>
                </div>
                
                <div className="benefit-features flex-grow-1">
                  <div className="benefit-feature-item d-flex align-items-center mb-3 p-3 rounded-3">
                    <div className="feature-icon me-3">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Tiết Kiệm 80% Thời Gian</h6>
                      <p className="text-secondary mb-0 small">Xử lý tự động 24/7, không cần nhập liệu thủ công</p>
                    </div>
                  </div>
                  
                  <div className="benefit-feature-item d-flex align-items-center mb-3 p-3 rounded-3">
                    <div className="feature-icon me-3">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">100% Tuân Thủ Thuế</h6>
                      <p className="text-secondary mb-0 small">Đảm bảo tuân thủ quy định thuế Việt Nam</p>
                    </div>
                  </div>
                  
                  <div className="benefit-feature-item d-flex align-items-center p-3 rounded-3">
                    <div className="feature-icon me-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Báo Cáo Thông Minh</h6>
                      <p className="text-secondary mb-0 small">Phân tích dữ liệu và dự báo kinh doanh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bên phải - 4 compact cards */}
          <div className="col-lg-6">
            <div className="benefit-right-section h-100">
              <div className="row g-3 h-100">
                <div className="col-md-6">
                  <div className="benefit-card-compact text-center p-3 rounded-4 shadow-sm h-100 d-flex flex-column">
                    <div className="benefit-icon-compact mb-3">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h6 className="fw-bold mb-2">AI Thông Minh</h6>
                    <p className="text-secondary small mb-0 flex-grow-1">Xử lý chứng từ tự động với độ chính xác cao</p>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="benefit-card-compact text-center p-3 rounded-4 shadow-sm h-100 d-flex flex-column">
                    <div className="benefit-icon-compact mb-3">
                      <i className="fas fa-cloud"></i>
                    </div>
                    <h6 className="fw-bold mb-2">Lưu Trữ Đám Mây</h6>
                    <p className="text-secondary small mb-0 flex-grow-1">Bảo mật cao, truy cập mọi lúc mọi nơi</p>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="benefit-card-compact text-center p-3 rounded-4 shadow-sm h-100 d-flex flex-column">
                    <div className="benefit-icon-compact mb-3">
                      <i className="fas fa-headset"></i>
                    </div>
                    <h6 className="fw-bold mb-2">Hỗ Trợ 24/7</h6>
                    <p className="text-secondary small mb-0 flex-grow-1">Đội ngũ chuyên gia hỗ trợ mọi lúc</p>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="benefit-card-compact text-center p-3 rounded-4 shadow-sm h-100 d-flex flex-column">
                    <div className="benefit-icon-compact mb-3">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h6 className="fw-bold mb-2">Đa Nền Tảng</h6>
                    <p className="text-secondary small mb-0 flex-grow-1">Sử dụng trên mọi thiết bị, mọi hệ điều hành</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <div className="stats-section-modern p-4 rounded-4">
              <div className="stats-bg-circle stats-bg-circle-1"></div>
              <div className="stats-bg-circle stats-bg-circle-2"></div>
              
              <div className="row g-3 position-relative">
                <div className="col-md-3 col-6">
                  <div className="stat-item-modern text-center">
                    <div className="stat-number-modern display-5 fw-bold text-white mb-2">10,000+</div>
                    <div className="stat-label-modern text-white-50 fw-semibold">HKD TIN TƯỞNG</div>
                  </div>
                </div>
                
                <div className="col-md-3 col-6">
                  <div className="stat-item-modern text-center">
                    <div className="stat-number-modern display-5 fw-bold text-white mb-2">99.9%</div>
                    <div className="stat-label-modern text-white-50 fw-semibold">ĐỘ CHÍNH XÁC</div>
                  </div>
                </div>
                
                <div className="col-md-3 col-6">
                  <div className="stat-item-modern text-center">
                    <div className="stat-number-modern display-5 fw-bold text-white mb-2">24/7</div>
                    <div className="stat-label-modern text-white-50 fw-semibold">HỖ TRỢ KHÁCH HÀNG</div>
                  </div>
                </div>
                
                <div className="col-md-3 col-6">
                  <div className="stat-item-modern text-center">
                    <div className="stat-number-modern display-5 fw-bold text-white mb-2">5+</div>
                    <div className="stat-label-modern text-white-50 fw-semibold">NĂM KINH NGHIỆM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 