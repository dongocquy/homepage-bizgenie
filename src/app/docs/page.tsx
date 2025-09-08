import React from 'react';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function Docs() {
  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tài liệu', href: '/docs' }
        ]}
        currentPage="Tài liệu"
      />
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary mb-3">
                  <i className="fas fa-book me-3"></i>
                  Tài Liệu Hướng Dẫn
                </h1>
                <p className="lead text-secondary">
                  Hướng dẫn chi tiết cách sử dụng BizHKD hiệu quả
                </p>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-play-circle text-primary me-3" style={{fontSize: '2rem'}}></i>
                        <h5 className="card-title text-primary mb-0">Hướng dẫn cơ bản</h5>
                      </div>
                      <p className="card-text text-secondary">
                        Tìm hiểu cách bắt đầu sử dụng BizHKD từ những bước đầu tiên
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check text-success me-2"></i>Cài đặt tài khoản</li>
                        <li><i className="fas fa-check text-success me-2"></i>Thiết lập ban đầu</li>
                        <li><i className="fas fa-check text-success me-2"></i>Nhập dữ liệu đầu tiên</li>
                      </ul>
                      <a href="#" className="btn btn-primary">
                        <i className="fas fa-play me-2"></i>
                        Bắt đầu
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-cogs text-primary me-3" style={{fontSize: '2rem'}}></i>
                        <h5 className="card-title text-primary mb-0">Hướng dẫn nâng cao</h5>
                      </div>
                      <p className="card-text text-secondary">
                        Khám phá các tính năng nâng cao và tùy chỉnh hệ thống
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check text-success me-2"></i>Tự động hóa quy trình</li>
                        <li><i className="fas fa-check text-success me-2"></i>Tích hợp API</li>
                        <li><i className="fas fa-check text-success me-2"></i>Báo cáo nâng cao</li>
                      </ul>
                      <a href="#" className="btn btn-outline-primary">
                        <i className="fas fa-cogs me-2"></i>
                        Tìm hiểu
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-video text-primary me-3" style={{fontSize: '2rem'}}></i>
                        <h5 className="card-title text-primary mb-0">Video hướng dẫn</h5>
                      </div>
                      <p className="card-text text-secondary">
                        Xem các video hướng dẫn chi tiết từ chuyên gia
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check text-success me-2"></i>Video cơ bản</li>
                        <li><i className="fas fa-check text-success me-2"></i>Video nâng cao</li>
                        <li><i className="fas fa-check text-success me-2"></i>Case study thực tế</li>
                      </ul>
                      <a href="#" className="btn btn-success">
                        <i className="fas fa-video me-2"></i>
                        Xem video
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-download text-primary me-3" style={{fontSize: '2rem'}}></i>
                        <h5 className="card-title text-primary mb-0">Tài liệu PDF</h5>
                      </div>
                      <p className="card-text text-secondary">
                        Tải xuống các tài liệu PDF chi tiết để tham khảo offline
                      </p>
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check text-success me-2"></i>Hướng dẫn sử dụng</li>
                        <li><i className="fas fa-check text-success me-2"></i>API Documentation</li>
                        <li><i className="fas fa-check text-success me-2"></i>Best Practices</li>
                      </ul>
                      <a href="#" className="btn btn-warning">
                        <i className="fas fa-download me-2"></i>
                        Tải xuống
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
