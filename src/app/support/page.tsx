import React from 'react';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function Support() {
  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Hỗ trợ', href: '/support' }
        ]}
        currentPage="Hỗ trợ"
      />
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary mb-3">
                  <i className="fas fa-headset me-3"></i>
                  Hỗ Trợ Khách Hàng
                </h1>
                <p className="lead text-secondary">
                  Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
                </p>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-phone text-primary" style={{fontSize: '2rem'}}></i>
                      </div>
                      <h5 className="card-title text-primary">Hotline</h5>
                      <p className="card-text text-secondary">
                        Gọi ngay để được hỗ trợ trực tiếp
                      </p>
                      <a href="tel:1900123456" className="btn btn-primary">
                        <i className="fas fa-phone me-2"></i>
                        1900 123 456
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-envelope text-primary" style={{fontSize: '2rem'}}></i>
                      </div>
                      <h5 className="card-title text-primary">Email</h5>
                      <p className="card-text text-secondary">
                        Gửi email để được phản hồi trong 24h
                      </p>
                      <a href="mailto:support@bizhkd.com" className="btn btn-outline-primary">
                        <i className="fas fa-envelope me-2"></i>
                        support@bizhkd.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-comments text-primary" style={{fontSize: '2rem'}}></i>
                      </div>
                      <h5 className="card-title text-primary">Chat trực tuyến</h5>
                      <p className="card-text text-secondary">
                        Chat với chuyên gia ngay bây giờ
                      </p>
                      <button className="btn btn-success">
                        <i className="fas fa-comments me-2"></i>
                        Bắt đầu chat
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <i className="fas fa-question-circle text-primary" style={{fontSize: '2rem'}}></i>
                      </div>
                      <h5 className="card-title text-primary">FAQ</h5>
                      <p className="card-text text-secondary">
                        Tìm câu trả lời nhanh cho các câu hỏi thường gặp
                      </p>
                      <a href="/faq" className="btn btn-outline-info">
                        <i className="fas fa-question-circle me-2"></i>
                        Xem FAQ
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
