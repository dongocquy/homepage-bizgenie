'use client';

import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="cta-section bg-card">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-4">Bắt đầu dùng thử ngay hôm nay</h2>
            <p className="lead mb-4">Không cần thẻ tín dụng, miễn phí 14 ngày trải nghiệm đầy đủ tính năng.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="https://zalo.me/0917787708" target="_blank" className="btn btn-primary btn-lg fw-bold">
                <i className="fab fa-zalo me-2"></i>Liên hệ tư vấn miễn phí
              </a>
              <a href="tel:0328866539" className="btn btn-outline-primary btn-lg">
                <i className="fas fa-phone me-2"></i>Gọi ngay: 032 8866 539
              </a>
              <a href="#contact" className="btn btn-primary btn-lg">
                Xem thông tin liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 