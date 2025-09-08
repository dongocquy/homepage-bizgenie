
import React from 'react';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: 'Miễn phí',
    description: 'Hoàn hảo cho doanh nghiệp nhỏ mới bắt đầu',
    features: [
      'Tối đa 5 thành viên',
      'Quản lý dự án cơ bản',
      '5GB lưu trữ',
      'Hỗ trợ email',
      'Templates cơ bản'
    ],
    cta: 'Bắt đầu miễn phí',
    popular: false
  },
  {
    name: 'Professional',
    price: '299.000đ',
    period: '/tháng',
    description: 'Lý tưởng cho doanh nghiệp đang phát triển',
    features: [
      'Tối đa 25 thành viên',
      'Tất cả tính năng Starter',
      'Phân tích nâng cao',
      'Tích hợp API',
      'Hỗ trợ ưu tiên',
      '50GB lưu trữ',
      'Báo cáo tùy chỉnh'
    ],
    cta: 'Dùng thử miễn phí',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Liên hệ',
    description: 'Giải pháp tùy chỉnh cho doanh nghiệp lớn',
    features: [
      'Không giới hạn thành viên',
      'Tất cả tính năng Professional',
      'Tùy chỉnh hoàn toàn',
      'SLA đảm bảo',
      'Hỗ trợ 24/7',
      'Lưu trữ không giới hạn',
      'Tích hợp SSO',
      'Quản lý bảo mật nâng cao'
    ],
    cta: 'Liên hệ bán hàng',
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chọn gói phù hợp
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp các gói dịch vụ linh hoạt để đáp ứng mọi nhu cầu 
              của doanh nghiệp, từ startup nhỏ đến tập đoàn lớn.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                    plan.popular 
                      ? 'border-blue-500 scale-105' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Phổ biến nhất
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-600 text-lg">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Câu hỏi thường gặp
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tôi có thể thay đổi gói dịch vụ bất cứ lúc nào không?
                </h3>
                <p className="text-gray-600">
                  Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất cứ lúc nào. 
                  Thay đổi sẽ có hiệu lực ngay lập tức.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Có dùng thử miễn phí không?
                </h3>
                <p className="text-gray-600">
                  Tất cả các gói đều có thời gian dùng thử miễn phí 14 ngày. 
                  Không cần thẻ tín dụng để bắt đầu.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hỗ trợ kỹ thuật như thế nào?
                </h3>
                <p className="text-gray-600">
                  Gói Starter có hỗ trợ qua email, Professional có hỗ trợ ưu tiên, 
                  và Enterprise có hỗ trợ 24/7 với SLA đảm bảo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 