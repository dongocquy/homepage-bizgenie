import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-8 mx-auto text-center">
                <div className="error-content">
                  <h1 className="display-1 fw-bold text-white mb-4">404</h1>
                  <h2 className="display-4 fw-bold text-white mb-4">
                    Trang không tìm thấy
                  </h2>
                  <p className="lead text-white mb-5">
                    Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
                  </p>
                  
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/" className="btn btn-primary btn-lg px-4 py-3">
                      <i className="fas fa-home me-2"></i>
                      Về trang chủ
                    </Link>
                    <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-envelope me-2"></i>
                      Liên hệ hỗ trợ
                    </Link>
                  </div>
                  
                  <div className="mt-5">
                    <h5 className="text-white mb-3">Có thể bạn quan tâm:</h5>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <Link href="/features" className="btn btn-outline-light w-100">
                          <i className="fas fa-star me-2"></i>
                          Tính năng
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link href="/pricing" className="btn btn-outline-light w-100">
                          <i className="fas fa-tags me-2"></i>
                          Bảng giá
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link href="/about" className="btn btn-outline-light w-100">
                          <i className="fas fa-info-circle me-2"></i>
                          Giới thiệu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
