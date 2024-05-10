'use client';
export default function Headings({children, subTitle, className}) {
  return (
    <div>
        <span className="text-white">{subTitle}</span>
        <h3 className={className}>{children}</h3>
    </div>
  );
}
