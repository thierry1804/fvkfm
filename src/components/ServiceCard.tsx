import React from 'react';
import { Link } from 'react-router-dom';
import type { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features?: string[];
  color?: 'primary' | 'accent' | 'secondary';
  href?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features = [],
  color = 'primary',
  href,
  className = ''
}) => {
  const colorClasses = {
    primary: {
      bg: 'from-primary-50 to-primary-100',
      icon: 'bg-primary-500',
      text: 'text-primary-600',
      hover: 'hover:shadow-primary-500/20'
    },
    accent: {
      bg: 'from-accent-50 to-accent-100',
      icon: 'bg-accent-500',
      text: 'text-accent-600',
      hover: 'hover:shadow-accent-500/20'
    },
    secondary: {
      bg: 'from-secondary-50 to-secondary-100',
      icon: 'bg-secondary-500',
      text: 'text-secondary-600',
      hover: 'hover:shadow-secondary-500/20'
    }
  };

  const classes = `group bg-gradient-to-br ${colorClasses[color].bg} p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 ${className}`;

  const content = (
    <>
      <div className={`w-16 h-16 ${colorClasses[color].icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-2xl font-bold text-secondary-800 mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-secondary-600">
              <div className={`w-2 h-2 ${colorClasses[color].icon} rounded-full mr-3`}></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {href && (
        <div className="inline-flex items-center text-secondary-600 font-semibold hover:text-primary-600 transition-colors duration-200 group/link">
          En savoir plus
          <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <div className={classes}>
      {content}
    </div>
  );
};

export default ServiceCard; 