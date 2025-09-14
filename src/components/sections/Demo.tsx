'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Demo: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(4);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const demoFeatures = [
    {
      id: 1,
      title: 'Nhận diện chứng từ tự động',
      description: 'AI tự động nhận diện và phân loại hóa đơn, chứng từ',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png'
    },
    {
      id: 2,
      title: 'Ghi sổ kế toán thông minh',
      description: 'Tự động hạch toán và ghi sổ theo quy định thuế Việt Nam',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png'
    },
    {
      id: 3,
      title: 'Báo cáo thuế tự động',
      description: 'Tự động lập và nộp báo cáo thuế theo quy định',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png'
    },
    {
      id: 4,
      title: 'Dashboard thông minh',
      description: 'Theo dõi tình hình tài chính và kinh doanh real-time',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png'
    }
  ];


  // Lấy hình ảnh hiện tại dựa trên feature được chọn
  const currentImage = demoFeatures.find(feature => feature.id === activeFeature)?.image || demoFeatures[3].image;

  // Hàm xử lý khi click vào feature card
  const handleFeatureClick = (featureId: number) => {
    if (featureId === activeFeature) return; // Không làm gì nếu đã active
    
    setIsImageChanging(true);
    setTimeout(() => {
      setActiveFeature(featureId);
      setIsImageChanging(false);
    }, 400); // Tăng delay để hiệu ứng mượt mà hơn
  };

  // Hàm xử lý keyboard events cho accessibility
  const handleKeyDown = (event: React.KeyboardEvent, featureId: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFeatureClick(featureId);
    }
  };

  return (
    <section id="demo" className="py-5 bg-card">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold mb-2">DEMO TRỰC QUAN</h6>
          <h2 className="display-5 fw-bold mb-3 text-dark">Trải nghiệm BizHKD ngay bây giờ</h2>
          <p className="lead text-secondary">Xem cách BizHKD tự động hóa quy trình kế toán của bạn</p>
        </div>
        
        <div className="row g-4">
          {/* Left Column - Feature List */}
          <div className="col-lg-4">
            <div className="demo-features-list">
              {demoFeatures.map((feature) => (
                <div 
                  key={feature.id} 
                  className={`demo-feature-card ${activeFeature === feature.id ? 'active' : ''}`}
                  onClick={() => handleFeatureClick(feature.id)}
                  onKeyDown={(e) => handleKeyDown(e, feature.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Xem demo tính năng: ${feature.title}`}
                  aria-pressed={activeFeature === feature.id}
                >
                  <div className="demo-feature-icon">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="demo-feature-content">
                    <h5 className="fw-bold mb-2 text-dark">{feature.title}</h5>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Demo Interface */}
          <div className="col-lg-8">
            <div className="demo-interface">
              {/* Main Content Area */}
              <div className="demo-main-content">
                <div className="demo-content-area text-center">
                  {/* Demo Image */}
                  <div className="demo-image-container mb-4">
                    <div className={`demo-image-wrapper ${isImageChanging ? 'changing' : ''}`}>
                      <Image
                        src={currentImage}
                        alt={`BizHKD Demo - ${demoFeatures.find(f => f.id === activeFeature)?.title || 'Dashboard thông minh'}`}
                        width={1600}
                        height={1200}
                        className="img-fluid rounded-custom shadow-lg demo-image-transition"
                        priority={false}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                        style={{
                          width: 'auto',
                          height: 'auto'
                        }}
                      />
                    </div>
                    <div className="demo-image-overlay">
                      <button 
                        className="btn btn-gradient btn-lg demo-overlay-btn"
                        aria-label="Xem demo trực tiếp BizHKD"
                        type="button"
                      >
                        <i className="fas fa-play me-2" aria-hidden="true"></i>
                        Xem demo
                      </button>
                    </div>
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

export default Demo; 