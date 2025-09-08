import React from 'react';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Blog', href: '/blog' }
        ]}
        currentPage="Blog"
      />
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary mb-3">
                  Blog & Tin Tức
                </h1>
                <p className="lead text-secondary">
                  Cập nhật những tin tức mới nhất về BizHKD và các xu hướng kế toán hiện đại
                </p>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        <i className="fas fa-chart-line me-2"></i>
                        Xu hướng kế toán 2024
                      </h5>
                      <p className="card-text text-secondary">
                        Khám phá những xu hướng mới nhất trong ngành kế toán và cách AI đang thay đổi cách thức làm việc...
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <i className="fas fa-calendar me-1"></i>
                          15/01/2024
                        </small>
                        <a href="#" className="btn btn-outline-primary btn-sm">
                          Đọc thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        <i className="fas fa-lightbulb me-2"></i>
                        Tips kế toán hiệu quả
                      </h5>
                      <p className="card-text text-secondary">
                        Những mẹo hay giúp bạn làm kế toán nhanh chóng và chính xác hơn với BizHKD...
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          <i className="fas fa-calendar me-1"></i>
                          12/01/2024
                        </small>
                        <a href="#" className="btn btn-outline-primary btn-sm">
                          Đọc thêm
                        </a>
                      </div>
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
