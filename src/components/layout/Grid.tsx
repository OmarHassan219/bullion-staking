/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/



import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  cols?: string;
  gap?: string;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = '1',
  gap = '0',
  className = '',
}: GridProps) => {
  const gridClasses = `grid grid-cols-${cols} gap-${gap} ${className}`;

  return <div className={gridClasses}>{children}</div>;
};

