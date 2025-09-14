'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/hero-title.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content">
            <span className="badge bg-primary text-white mb-3 px-3 py-2">
              AI GHI SỔ KẾ TOÁN THÔNG MINH
            </span>
            <h1 className="hero-title mb-4">
              <span className="hero-title-main">Tự động hóa</span>
              <span className="hero-title-highlight">quy trình kế toán</span>
              <span className="hero-title-ai">với AI</span>
            </h1>
            <p className="lead mb-4 text-light">
              <strong className="text-white">BizHKD</strong> giúp Hộ kinh doanh tiết kiệm <strong className="text-success">80% thời gian</strong> xử lý chứng từ và ghi sổ kế toán, đảm bảo <strong className="text-warning">100% tuân thủ</strong> quy định thuế Việt Nam.
            </p>
            <div className="d-flex gap-3">
              <Link 
                href="#pricing" 
                className="btn btn-primary btn-lg px-4 py-3"
                aria-label="Đăng ký dùng thử miễn phí BizHKD"
              >
                Dùng thử miễn phí
              </Link>
              <Link 
                href="#demo" 
                className="btn btn-outline-primary btn-lg px-4 py-3"
                aria-label="Xem demo trực quan của BizHKD"
              >
                Xem demo
              </Link>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-image-static text-center">
              <Image
                src="https://static.agentcloud.vn/bizgenie.vn/images/test_642f0b38b1_20250813.png"
                alt="BizHKD Demo - Giao diện AI ghi sổ kế toán thông minh cho Hộ kinh doanh"
                width={600}
                height={400}
                className="img-fluid rounded-custom shadow-lg"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                style={{
                  width: 'auto',
                  height: 'auto'
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 