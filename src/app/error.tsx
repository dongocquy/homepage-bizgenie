'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen">
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-8 mx-auto text-center">
                <div className="error-content">
                  <h1 className="display-1 fw-bold text-white mb-4">500</h1>
                  <h2 className="display-4 fw-bold text-white mb-4">
                    Lỗi hệ thống
                  </h2>
                  <p className="lead text-white mb-5">
                    Đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau hoặc liên hệ với chúng tôi để được hỗ trợ.
                  </p>
                  
                  {process.env.NODE_ENV === 'development' && (
                    <div className="alert alert-danger mb-4">
                      <h6 className="alert-heading">Chi tiết lỗi (Development):</h6>
                      <p className="mb-0 small">{error.message}</p>
                      {error.digest && (
                        <p className="mb-0 small">Digest: {error.digest}</p>
                      )}
                    </div>
                  )}
                  
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button 
                      onClick={reset}
                      className="btn btn-primary btn-lg px-4 py-3"
                    >
                      <i className="fas fa-redo me-2"></i>
                      Thử lại
                    </button>
                    <Link href="/" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-home me-2"></i>
                      Về trang chủ
                    </Link>
                    <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-3">
                      <i className="fas fa-envelope me-2"></i>
                      Liên hệ hỗ trợ
                    </Link>
                  </div>
                  
                  <div className="mt-5">
                    <h5 className="text-white mb-3">Thông tin hỗ trợ:</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="card bg-dark bg-opacity-50">
                          <div className="card-body text-center">
                            <i className="fas fa-phone text-primary mb-2"></i>
                            <h6 className="text-white">Hotline</h6>
                            <p className="text-secondary mb-0">032 8866 539</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card bg-dark bg-opacity-50">
                          <div className="card-body text-center">
                            <i className="fab fa-zalo text-primary mb-2"></i>
                            <h6 className="text-white">Zalo</h6>
                            <p className="text-secondary mb-0">091 778 7708</p>
                          </div>
                        </div>
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
