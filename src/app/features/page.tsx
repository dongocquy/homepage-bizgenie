import React from 'react';
import Footer from '@/components/layout/Footer';

const features = [
  {
    category: 'Quản lý dự án',
    items: [
      {
        title: 'Kanban Board',
        description: 'Quản lý công việc trực quan với bảng Kanban, dễ dàng theo dõi tiến độ và phân công nhiệm vụ.',
        icon: '📋'
      },
      {
        title: 'Timeline & Gantt',
        description: 'Lập kế hoạch dự án chi tiết với biểu đồ Gantt và timeline trực quan.',
        icon: '📅'
      },
      {
        title: 'Resource Management',
        description: 'Quản lý tài nguyên, phân bổ nhân lực và tối ưu hóa hiệu suất làm việc.',
        icon: '👥'
      }
    ]
  },
  {
    category: 'Phân tích & Báo cáo',
    items: [
      {
        title: 'Dashboard thông minh',
        description: 'Bảng điều khiển tùy chỉnh với các chỉ số KPI quan trọng của doanh nghiệp.',
        icon: '📊'
      },
      {
        title: 'Báo cáo tự động',
        description: 'Tạo báo cáo định kỳ tự động với dữ liệu thời gian thực.',
        icon: '📈'
      },
      {
        title: 'Phân tích xu hướng',
        description: 'Phân tích dữ liệu và dự đoán xu hướng kinh doanh trong tương lai.',
        icon: '🔮'
      }
    ]
  },
  {
    category: 'Tích hợp & API',
    items: [
      {
        title: 'Third-party Apps',
        description: 'Tích hợp với Slack, Google Workspace, Microsoft 365 và nhiều ứng dụng khác.',
        icon: '🔗'
      },
      {
        title: 'RESTful API',
        description: 'API mạnh mẽ để tích hợp với hệ thống nội bộ và ứng dụng tùy chỉnh.',
        icon: '⚙️'
      },
      {
        title: 'Webhook',
        description: 'Nhận thông báo real-time khi có sự kiện xảy ra trong hệ thống.',
        icon: '🔔'
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tính năng mạnh mẽ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá tất cả các công cụ và tính năng mà BizGenie cung cấp để 
              đưa doanh nghiệp của bạn lên một tầm cao mới.
            </p>
          </div>
        </section>

        {/* Features Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Đăng ký ngay hôm nay để trải nghiệm tất cả các tính năng mạnh mẽ của BizGenie.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Dùng thử miễn phí
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 