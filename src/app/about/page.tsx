import React from 'react';
import Footer from '@/components/layout/Footer';

const team = [
  {
    name: 'Nguyễn Văn A',
    position: 'CEO & Founder',
    bio: '15+ năm kinh nghiệm trong lĩnh vực công nghệ và quản lý doanh nghiệp.',
    avatar: '👨‍💼'
  },
  {
    name: 'Trần Thị B',
    position: 'CTO',
    bio: 'Chuyên gia về kiến trúc hệ thống và phát triển phần mềm quy mô lớn.',
    avatar: '👩‍💻'
  },
  {
    name: 'Lê Văn C',
    position: 'Head of Product',
    bio: 'Chuyên gia về UX/UI và phát triển sản phẩm dựa trên dữ liệu người dùng.',
    avatar: '👨‍🎨'
  },
  {
    name: 'Phạm Thị D',
    position: 'Head of Sales',
    bio: 'Chuyên gia về chiến lược kinh doanh và phát triển thị trường.',
    avatar: '👩‍💼'
  }
];

const stats = [
  { number: '10,000+', label: 'Khách hàng tin tưởng' },
  { number: '50+', label: 'Quốc gia phục vụ' },
  { number: '99.9%', label: 'Uptime đảm bảo' },
  { number: '24/7', label: 'Hỗ trợ khách hàng' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Về BizGenie
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi là đội ngũ đam mê công nghệ, cam kết mang đến những giải pháp 
              kinh doanh thông minh giúp doanh nghiệp phát triển bền vững.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sứ mệnh của chúng tôi
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  BizGenie được thành lập với sứ mệnh đơn giản hóa quy trình kinh doanh 
                  và giúp các doanh nghiệp tập trung vào những gì quan trọng nhất - 
                  phát triển sản phẩm và phục vụ khách hàng.
                </p>
                <p className="text-lg text-gray-600">
                  Chúng tôi tin rằng công nghệ phải đơn giản, trực quan và hiệu quả. 
                  Mỗi tính năng trong BizGenie đều được thiết kế để giải quyết 
                  những vấn đề thực tế mà doanh nghiệp gặp phải hàng ngày.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Tầm nhìn
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Chúng tôi mơ ước về một thế giới nơi mọi doanh nghiệp, dù lớn hay nhỏ, 
                  đều có thể tiếp cận những công cụ quản lý chuyên nghiệp và hiện đại.
                </p>
                <p className="text-lg text-gray-600">
                  BizGenie sẽ trở thành nền tảng quản lý kinh doanh hàng đầu tại Việt Nam 
                  và khu vực Đông Nam Á, giúp các doanh nghiệp địa phương cạnh tranh 
                  hiệu quả trên thị trường toàn cầu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Đội ngũ của chúng tôi
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Gặp gỡ những con người tài năng và đam mê đang xây dựng 
                tương lai của BizGenie.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Giá trị cốt lõi
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những nguyên tắc định hướng mọi quyết định và hành động của chúng tôi.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Chất lượng
                </h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết cung cấp sản phẩm và dịch vụ chất lượng cao nhất, 
                  không ngừng cải tiến và đổi mới.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cộng đồng
                </h3>
                <p className="text-gray-600">
                  Chúng tôi xây dựng cộng đồng người dùng mạnh mẽ, 
                  hỗ trợ lẫn nhau và chia sẻ kiến thức.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Đổi mới
                </h3>
                <p className="text-gray-600">
                  Chúng tôi không ngừng tìm kiếm những cách tiếp cận mới 
                  để giải quyết các thách thức kinh doanh.
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