
import React from 'react';

interface IconProps {
    className?: string;
}

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-heart ${className}`}></i>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-check-circle ${className}`}></i>
);

export const SecurityIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-shield-alt ${className}`}></i>
);

export const FoodIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-utensils ${className}`}></i>
);

export const ActivityIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-puzzle-piece ${className}`}></i>
);

export const NurseIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-user-nurse ${className}`}></i>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fab fa-whatsapp ${className}`}></i>
);

export const HouseIcon: React.FC<IconProps> = ({ className }) => (
    <i className={`fas fa-home ${className}`}></i>
);
