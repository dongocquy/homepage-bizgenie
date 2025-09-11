'use client';

import React, { useEffect, useState } from 'react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    rating: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate cards with stagger effect
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
            // Animate stats
            animateStats();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    // Animate customers count
    let step = 0;
    const customerInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedStats(prev => ({
        ...prev,
        customers: Math.floor(10000 * easeOutQuart)
      }));
      if (step >= steps) clearInterval(customerInterval);
    }, stepDuration);

    // Animate rating
    let ratingStep = 0;
    const ratingInterval = setInterval(() => {
      ratingStep++;
      const progress = ratingStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedStats(prev => ({
        ...prev,
        rating: Number((4.9 * easeOutQuart).toFixed(1))
      }));
      if (ratingStep >= steps) clearInterval(ratingInterval);
    }, stepDuration);

    // Animate satisfaction
    let satisfactionStep = 0;
    const satisfactionInterval = setInterval(() => {
      satisfactionStep++;
      const progress = satisfactionStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedStats(prev => ({
        ...prev,
        satisfaction: Math.floor(99 * easeOutQuart)
      }));
      if (satisfactionStep >= steps) clearInterval(satisfactionInterval);
    }, stepDuration);
  };
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
    <section id="testimonials-section" className="py-5 bg-card">
      <div className="container">
        <div className={`text-center mb-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h6 className="text-primary fw-bold mb-2 animate-fade-in-up">ĐÁNH GIÁ KHÁCH HÀNG</h6>
          <h2 className="display-5 fw-bold mb-3 text-dark animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Khách hàng nói gì về BizHKD?
          </h2>
          <p className="lead text-secondary animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Hơn 10,000+ Hộ kinh doanh đã tin tưởng và sử dụng BizHKD
          </p>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="col-lg-4 col-md-6"
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="testimonial-card h-100 testimonial-card-enhanced">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-avatar me-3">
                    <div className="avatar-circle">
                      <span className="avatar-text">{testimonial.avatar}</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h6 className="fw-bold mb-1 text-dark testimonial-customer-name">{testimonial.name}</h6>
                    <p className="text-primary mb-0 small testimonial-position">{testimonial.position}</p>
                    <p className="text-secondary mb-0 small testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="testimonial-rating mb-3">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <i 
                      key={starIndex} 
                      className="fas fa-star text-primary star-animated"
                      style={{
                        animationDelay: `${starIndex * 0.1}s`,
                        animation: visibleCards.includes(index) ? 'starGlow 0.6s ease-out forwards' : 'none'
                      }}
                    ></i>
                  ))}
                </div>
                
                <blockquote className="testimonial-content">
                  <p className="text-secondary mb-3 testimonial-quote">&ldquo;{testimonial.content}&rdquo;</p>
                </blockquote>
                
                <div className="testimonial-industry">
                  <span className="badge bg-primary bg-opacity-20 text-primary testimonial-industry-badge">
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
              <div className="stat-number display-6 fw-bold text-white counter-animated testimonial-stat-number">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="stat-label text-secondary testimonial-stat-label">Khách hàng tin tưởng</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number display-6 fw-bold text-white counter-animated testimonial-stat-number">
                {animatedStats.rating}/5
              </div>
              <div className="stat-label text-secondary testimonial-stat-label">Đánh giá trung bình</div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number display-6 fw-bold text-white counter-animated testimonial-stat-number">
                {animatedStats.satisfaction}%
              </div>
              <div className="stat-label text-secondary testimonial-stat-label">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
