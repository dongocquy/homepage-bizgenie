'use client';

import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Văn Minh',
      company: 'Công ty TNHH Minh Thành',
      position: 'Giám đốc',
      avatar: '👨‍💼',
      content: 'BizHKD đã giúp chúng tôi tiết kiệm 80% thời gian làm kế toán. Từ việc nhập liệu thủ công mất 2 ngày, giờ chỉ cần 2 giờ là xong.',
      rating: 5,
      industry: 'Thương mại'
    },
    {
      id: 2,
      name: 'Trần Thị Lan',
      company: 'Nhà hàng Lan Anh',
      position: 'Chủ nhà hàng',
      avatar: '👩‍🍳',
      content: 'AI nhận diện hóa đơn rất chính xác, không còn lo sai sót khi nhập liệu. Báo cáo thuế tự động giúp tôi yên tâm hơn nhiều.',
      rating: 5,
      industry: 'Dịch vụ ăn uống'
    },
    {
      id: 3,
      name: 'Lê Văn Hùng',
      company: 'Xưởng sản xuất Hùng Phát',
      position: 'Giám đốc sản xuất',
      avatar: '👨‍🔧',
      content: 'Tích hợp với hệ thống sản xuất rất mượt mà. Dashboard theo dõi chi phí real-time giúp tôi quản lý hiệu quả hơn.',
      rating: 5,
      industry: 'Sản xuất'
    },
    {
      id: 4,
      name: 'Phạm Thị Mai',
      company: 'Shop thời trang Mai Style',
      position: 'Chủ shop',
      avatar: '👩‍💼',
      content: 'Hỗ trợ khách hàng 24/7 rất nhiệt tình. Mỗi khi có vấn đề gì đều được giải đáp ngay lập tức.',
      rating: 5,
      industry: 'Bán lẻ'
    },
    {
      id: 5,
      name: 'Hoàng Văn Đức',
      company: 'Công ty TNHH Đức Minh',
      position: 'Kế toán trưởng',
      avatar: '👨‍💻',
      content: 'Giao diện thân thiện, dễ sử dụng. Các tính năng nâng cao giúp tôi làm việc chuyên nghiệp hơn.',
      rating: 5,
      industry: 'Dịch vụ'
    },
    {
      id: 6,
      name: 'Võ Thị Hoa',
      company: 'Spa Hoa Sen',
      position: 'Chủ spa',
      avatar: '👩‍⚕️',
      content: 'Báo cáo tài chính chi tiết giúp tôi hiểu rõ tình hình kinh doanh. Cảm ơn BizHKD đã hỗ trợ tôi phát triển.',
      rating: 5,
      industry: 'Dịch vụ làm đẹp'
    }
  ];

  return (
    <section className="py-5 bg-card">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold mb-2">ĐÁNH GIÁ KHÁCH HÀNG</h6>
          <h2 className="display-5 fw-bold mb-3 text-white">
            Khách hàng nói gì về BizHKD?
          </h2>
          <p className="lead text-secondary">
            Hơn 10,000+ Hộ kinh doanh đã tin tưởng và sử dụng BizHKD
          </p>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card h-100">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-avatar me-3">
                    <div className="avatar-circle">
                      <span className="avatar-text">{testimonial.avatar}</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h6 className="fw-bold mb-1 text-white">{testimonial.name}</h6>
                    <p className="text-warning mb-0 small">{testimonial.position}</p>
                    <p className="text-secondary mb-0 small">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="testimonial-rating mb-3">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star text-warning"></i>
                  ))}
                </div>
                
                <blockquote className="testimonial-content">
                  <p className="text-secondary mb-3">&ldquo;{testimonial.content}&rdquo;</p>
                </blockquote>
                
                <div className="testimonial-industry">
                  <span className="badge bg-warning bg-opacity-20 text-warning">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="stats-row d-flex justify-content-center align-items-center gap-5">
            <div className="stat-item text-center">
              <div className="stat-number display-6 fw-bold text-white">10,000+</div>
              <div className="stat-label text-secondary">Khách hàng tin tưởng</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number display-6 fw-bold text-white">4.9/5</div>
              <div className="stat-label text-secondary">Đánh giá trung bình</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number display-6 fw-bold text-white">99%</div>
              <div className="stat-label text-secondary">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
