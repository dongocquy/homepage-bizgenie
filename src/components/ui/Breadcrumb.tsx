'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  
  // Tạo breadcrumb items dựa trên pathname
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [
      { label: 'Trang chủ', href: '/', isActive: pathname === '/' }
    ];

    if (paths.length === 0) return items;

    // Xử lý các route cụ thể
    const routeLabels: { [key: string]: string } = {
      'features': 'Tính năng',
      'about': 'Giới thiệu',
      'pricing': 'Bảng giá',
      'contact': 'Liên hệ',
      'demo': 'Demo',
      'benefits': 'Lợi ích',
      'faq': 'FAQ'
    };

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const label = routeLabels[path] || path.charAt(0).toUpperCase() + path.slice(1);
      const isActive = index === paths.length - 1;
      
      items.push({
        label,
        href: isActive ? undefined : currentPath,
        isActive
      });
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.isActive ? (
                <span className="breadcrumb-current">
                  {index === 0 && (
                    <i className="fas fa-home me-2"></i>
                  )}
                  {item.label}
                </span>
              ) : (
                <Link href={item.href || '#'} className="breadcrumb-link">
                  {index === 0 && (
                    <i className="fas fa-home me-2"></i>
                  )}
                  {item.label}
                </Link>
              )}
              {index < breadcrumbItems.length - 1 && (
                <span className="breadcrumb-separator">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb; 