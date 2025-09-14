'use client';

import React, { useState } from 'react';

const TestPricingButtons: React.FC = () => {
  const [loadingButtons, setLoadingButtons] = useState<{[key: string]: boolean}>({});

  const handleButtonClick = (planName: string, url: string, event: React.MouseEvent<HTMLButtonElement>) => {
    setLoadingButtons(prev => ({ ...prev, [planName]: true }));
    
    setTimeout(() => {
      window.open(url, '_blank');
      setLoadingButtons(prev => ({ ...prev, [planName]: false }));
    }, 1000);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Test Pricing Buttons</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>Gói Starter</h5>
              <p className="text-muted">299K/tháng</p>
              <button 
                onClick={(e) => handleButtonClick('starter', 'https://bizgenie.vn/goi-starter---ai-ghi-so-ke-toan-bizhkd.html', e)}
                className={`btn btn-outline-primary w-100 pricing-btn-enhanced ${loadingButtons.starter ? 'loading' : ''}`}
                disabled={loadingButtons.starter}
              >
                {loadingButtons.starter ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <span>Đăng ký ngay</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>Gói Pro</h5>
              <p className="text-muted">499K/tháng</p>
              <button 
                onClick={(e) => handleButtonClick('pro', 'https://bizgenie.vn/goi-pro---ai-ghi-so-ke-toan-bizhkd.html', e)}
                className={`btn btn-gradient w-100 pricing-btn-enhanced pricing-btn-popular ${loadingButtons.pro ? 'loading' : ''}`}
                disabled={loadingButtons.pro}
              >
                {loadingButtons.pro ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <span>Đăng ký ngay</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>Gói Premium</h5>
              <p className="text-muted">699K/tháng</p>
              <button 
                onClick={(e) => handleButtonClick('premium', 'https://bizgenie.vn/goi-premium---ai-ghi-so-ke-toan-bizhkd.html', e)}
                className={`btn btn-outline-primary w-100 pricing-btn-enhanced ${loadingButtons.premium ? 'loading' : ''}`}
                disabled={loadingButtons.premium}
              >
                {loadingButtons.premium ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    Đang xử lý...
                  </>
                ) : (
                  <>
                    <span>Đăng ký ngay</span>
                    <i className="fas fa-arrow-right ms-2"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPricingButtons;
