"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;
}

export default function PageHeader({ title, subtitle, emoji }: PageHeaderProps) {
  return (
    <div className="text-center mb-8">
      {emoji && (
        <div className="text-6xl mb-4" role="img">
          {emoji}
        </div>
      )}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
}
