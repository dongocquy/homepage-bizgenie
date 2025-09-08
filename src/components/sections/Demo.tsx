'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const demoItems = [
    {
      id: 1,
      title: 'Nhận diện chứng từ tự động',
      description: 'AI tự động nhận diện và phân loại hóa đơn, chứng từ',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png',
      features: [
        'Nhận diện 20+ loại chứng từ',
        'Độ chính xác 99.9%',
        'Xử lý đa ngôn ngữ',
        'Tích hợp OCR tiên tiến'
      ]
    },
    {
      id: 2,
      title: 'Ghi sổ kế toán thông minh',
      description: 'Tự động hạch toán và ghi sổ theo quy định thuế Việt Nam',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png',
      features: [
        'Hạch toán tự động',
        'Tuân thủ chuẩn mực kế toán',
        'Kiểm tra sai sót',
        'Đối chiếu số liệu'
      ]
    },
    {
      id: 3,
      title: 'Báo cáo thuế tự động',
      description: 'Tự động lập và nộp báo cáo thuế theo quy định',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png',
      features: [
        'Lập báo cáo tự động',
        'Nhắc nhở hạn nộp',
        'Kiểm tra tính hợp lệ',
        'Xuất file theo yêu cầu'
      ]
    },
    {
      id: 4,
      title: 'Dashboard thông minh',
      description: 'Theo dõi tình hình tài chính và kinh doanh real-time',
      image: 'https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png',
      features: [
        'Biểu đồ trực quan',
        'Phân tích xu hướng',
        'Cảnh báo bất thường',
        'Báo cáo chi tiết'
      ]
    }
  ];

  return (
    <section id="demo" className="py-5 demo-section bg-card">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold mb-2">DEMO TRỰC QUAN</h6>
          <h2 className="display-5 fw-bold mb-3">Trải nghiệm BizHKD ngay bây giờ</h2>
          <p className="lead text-secondary">Xem cách BizHKD tự động hóa quy trình kế toán của bạn</p>
        </div>
        
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="demo-tabs">
              {demoItems.map((item) => (
                <div 
                  key={item.id}
                  className={`demo-tab ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="demo-tab-icon">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="demo-tab-content">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="text-secondary small mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="demo-content">
              {demoItems.map((item) => (
                <div 
                  key={item.id}
                  className={`demo-item ${activeTab === item.id ? 'show' : ''}`}
                  style={{ display: activeTab === item.id ? 'block' : 'none' }}
                >
                  <div className="demo-image-container mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={800}
                      height={500}
                      className="img-fluid rounded-custom shadow-lg"
                    />
                    <div className="demo-overlay">
                      <button className="btn btn-primary btn-lg">
                        Xem demo
                      </button>
                    </div>
                  </div>
                  
                  <div className="demo-features">
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-secondary mb-4">{item.description}</p>
                    
                    <div className="row g-3">
                      {item.features.map((feature, index) => (
                        <div key={index} className="col-md-6">
                          <div className="demo-feature-item">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Demo; 