'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top" style={{backgroundColor: '#212529'}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo và tên công ty */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <span className="fw-bold text-light fs-5">BizHKD</span>
              <div className="small text-light opacity-75">AI Kế Toán</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item mx-2">
              <Link href="/" className="nav-link fw-medium">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <button 
                className="nav-link dropdown-toggle fw-medium border-0 bg-transparent" 
                onClick={() => toggleDropdown('sanpham')}
                aria-expanded={openDropdown === 'sanpham'}
              >
                Sản phẩm
              </button>
              <ul className={`dropdown-menu ${openDropdown === 'sanpham' ? 'show' : ''}`}>
                <li><Link href="/features" className="dropdown-item">Tính năng</Link></li>
                <li><Link href="/pricing" className="dropdown-item">Bảng giá</Link></li>
                <li><Link href="/demo" className="dropdown-item">Demo</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-2">
              <button 
                className="nav-link dropdown-toggle fw-medium border-0 bg-transparent" 
                onClick={() => toggleDropdown('tainguyen')}
                aria-expanded={openDropdown === 'tainguyen'}
              >
                Tài nguyên
              </button>
              <ul className={`dropdown-menu ${openDropdown === 'tainguyen' ? 'show' : ''}`}>
                <li><Link href="/blog" className="dropdown-item">Blog</Link></li>
                <li><Link href="/docs" className="dropdown-item">Tài liệu</Link></li>
                <li><Link href="/tutorials" className="dropdown-item">Hướng dẫn</Link></li>
                <li><Link href="/api" className="dropdown-item">API</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <Link href="/about" className="nav-link fw-medium">
                Giới thiệu
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/contact" className="nav-link fw-medium">
                Liên hệ
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/support" className="nav-link fw-medium">
                Hỗ trợ
              </Link>
            </li>
          </ul>
          
        </div>

        {/* Mobile Navigation */}
        <div className="d-lg-none">
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Mobile Menu */}
          <div className={`position-absolute top-100 start-0 w-100 bg-dark shadow-lg ${isMenuOpen ? 'd-block' : 'd-none'}`} style={{zIndex: 1000}}>
            <div className="container py-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link fw-medium py-2 text-light">Trang chủ</Link>
                </li>
                <li className="nav-item">
                  <Link href="/features" className="nav-link fw-medium py-2 text-light">Tính năng</Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing" className="nav-link fw-medium py-2 text-light">Bảng giá</Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link fw-medium py-2 text-light">Giới thiệu</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link fw-medium py-2 text-light">Liên hệ</Link>
                </li>
                <li className="nav-item">
                  <Link href="/support" className="nav-link fw-medium py-2 text-light">Hỗ trợ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
