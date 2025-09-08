'use client';

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (itemId: number) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqItems = [
    {
      id: 1,
      icon: 'fas fa-question-circle',
      iconColor: 'text-primary',
      question: 'BizHKD có dễ sử dụng không? Tôi có cần kiến thức kế toán không?',
      answer: 'BizHKD được thiết kế rất dễ sử dụng, phù hợp với mọi đối tượng:',
      features: [
        { icon: 'fas fa-check-circle', color: 'text-success', text: 'Giao diện thân thiện: Thiết kế trực quan, dễ hiểu' },
        { icon: 'fas fa-check-circle', color: 'text-success', text: 'Hướng dẫn chi tiết: Video tutorial và tài liệu hướng dẫn' },
        { icon: 'fas fa-check-circle', color: 'text-success', text: 'Hỗ trợ 24/7: Đội ngũ chuyên gia sẵn sàng hỗ trợ' },
        { icon: 'fas fa-check-circle', color: 'text-success', text: 'Không cần kiến thức kế toán: AI sẽ xử lý mọi thứ tự động' }
      ]
    },
    {
      id: 2,
      icon: 'fas fa-shield-alt',
      iconColor: 'text-success',
      question: 'Dữ liệu của tôi có an toàn không? BizHKD có bảo mật không?',
      answer: 'BizHKD cam kết bảo mật dữ liệu của bạn với các tiêu chuẩn cao nhất:',
      features: [
        { icon: 'fas fa-lock', color: 'text-primary', text: 'Mã hóa SSL 256-bit: Bảo vệ dữ liệu truyền tải' },
        { icon: 'fas fa-database', color: 'text-primary', text: 'Lưu trữ đám mây an toàn: Sử dụng AWS/Google Cloud' },
        { icon: 'fas fa-user-shield', color: 'text-primary', text: 'Phân quyền truy cập: Chỉ bạn mới có thể xem dữ liệu' },
        { icon: 'fas fa-sync', color: 'text-primary', text: 'Sao lưu tự động: Dữ liệu được backup định kỳ' }
      ]
    },
    {
      id: 3,
      icon: 'fas fa-clock',
      iconColor: 'text-warning',
      question: 'Tôi có thể dùng thử trước khi mua không? Thời gian dùng thử bao lâu?',
      answer: 'Tất nhiên! BizHKD cung cấp gói dùng thử miễn phí:',
      features: [
        { icon: 'fas fa-gift', color: 'text-success', text: 'Dùng thử miễn phí 14 ngày: Không cần thẻ tín dụng' },
        { icon: 'fas fa-star', color: 'text-success', text: 'Đầy đủ tính năng: Trải nghiệm tất cả tính năng cao cấp' },
        { icon: 'fas fa-headset', color: 'text-success', text: 'Hỗ trợ tư vấn: Đội ngũ chuyên gia hỗ trợ trong quá trình dùng thử' },
        { icon: 'fas fa-arrow-right', color: 'text-success', text: 'Chuyển đổi dễ dàng: Nâng cấp lên gói trả phí bất cứ lúc nào' }
      ]
    },
    {
      id: 4,
      icon: 'fas fa-calculator',
      iconColor: 'text-info',
      question: 'BizHKD có hỗ trợ kê khai thuế không? Có tự động nộp báo cáo không?',
      answer: 'BizHKD hỗ trợ đầy đủ quy trình kế toán và thuế:',
      features: [
        { icon: 'fas fa-file-invoice', color: 'text-primary', text: 'Kê khai thuế tự động: Theo quy định mới nhất của Bộ Tài chính' },
        { icon: 'fas fa-robot', color: 'text-primary', text: 'AI phân loại chứng từ: Tự động nhận diện và phân loại hóa đơn' },
        { icon: 'fas fa-bell', color: 'text-primary', text: 'Nhắc nhở nộp thuế: Thông báo hạn nộp các loại thuế' },
        { icon: 'fas fa-chart-bar', color: 'text-primary', text: 'Báo cáo thuế chi tiết: Tổng hợp và xuất báo cáo theo yêu cầu' }
      ]
    }
  ];

  return (
    <section id="faq" className="py-5 faq-section">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold mb-2">CÂU HỎI THƯỜNG GẶP</h6>
          <h2 className="display-5 fw-bold mb-3 text-white">Giải đáp thắc mắc của bạn</h2>
          <p className="lead text-light">Tìm hiểu thêm về BizHKD và cách sử dụng hiệu quả</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-lg-10">
            <div className="faq-container">
              <div className="row g-4">
                {faqItems.map((item) => (
                  <div key={item.id} className="col-lg-6">
                    <div className="faq-card faq-card-enhanced">
                      <div 
                        className="faq-card-header" 
                        onClick={() => toggleItem(item.id)}
                      >
                        <div className="faq-icon-wrapper-top">
                          <div className="faq-icon">
                            <div className="faq-icon-bg"></div>
                            <i className={`${item.icon} ${item.iconColor}`}></i>
                          </div>
                        </div>
                        <h5 className="faq-question mb-0">{item.question}</h5>
                        <div className="faq-toggle">
                          <i className={`fas fa-chevron-down ${openItems.includes(item.id) ? 'rotated' : ''}`}></i>
                        </div>
                      </div>
                      
                      <div className={`faq-card-body ${openItems.includes(item.id) ? 'show' : ''}`} style={{ display: openItems.includes(item.id) ? 'block' : 'none' }}>
                        <div className="faq-content">
                          <p className="mb-3">{item.answer}</p>
                          <div className="faq-features">
                            {item.features.map((feature, index) => (
                              <div key={index} className="faq-feature-item">
                                <i className={`${feature.icon} ${feature.color}`}></i>
                                <span><strong>{feature.text.split(':')[0]}:</strong> {feature.text.split(':')[1]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default FAQ; 