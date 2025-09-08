'use client';

import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: 'fas fa-brain',
      title: 'AI Thông Minh',
      description: 'Trí tuệ nhân tạo xử lý chứng từ, hoá đơn và ghi sổ kế toán tự động theo quy định Thuế Việt Nam.',
      benefits: [
        'Nhận diện chứng từ tự động',
        'Phân loại giao dịch thông minh',
        'Hạch toán chính xác'
      ]
    },
    {
      id: 2,
      icon: 'fas fa-shield-alt',
      title: 'Kiểm Tra Sai Sót',
      description: 'Hệ thống phát hiện lỗi hạch toán, cảnh báo ngay khi có bất thường và đảm bảo tuân thủ quy định.',
      benefits: [
        'Kiểm tra tính hợp lệ',
        'Cảnh báo sai sót',
        'Đối chiếu số liệu'
      ]
    },
    {
      id: 3,
      icon: 'fas fa-cloud',
      title: 'Lưu Trữ Đám Mây',
      description: 'Dữ liệu được lưu trữ an toàn trên đám mây, truy cập mọi lúc mọi nơi trên mọi thiết bị.',
      benefits: [
        'Bảo mật cao cấp',
        'Đồng bộ real-time',
        'Sao lưu tự động'
      ]
    }
  ];

  return (
    <section id="features" className="py-5 bg-card">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold mb-2">
            TÍNH NĂNG NỔI BẬT
          </h6>
          <h2 className="display-5 fw-bold mb-3">
            Tại sao chọn BizHKD?
          </h2>
          <p className="lead text-secondary">
            Công nghệ AI tiên tiến kết hợp với nghiệp vụ kế toán chuyên sâu
          </p>
        </div>
        
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                
                <h5 className="fw-bold mb-3">
                  {feature.title}
                </h5>
                
                <p className="text-secondary mb-3">
                  {feature.description}
                </p>
                
                <ul className="list-unstyled">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 