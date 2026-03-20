import { ReactNode } from 'react';
import './sectioncontainer.css';

type SectionContainerProps = {
  children: React.ReactNode;
  className: string;
};

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  const containerClassName = ['section-container', className].filter(Boolean).join(' ');

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
};

export default SectionContainer;
