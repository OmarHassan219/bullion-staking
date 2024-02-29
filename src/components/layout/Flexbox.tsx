/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import React, { ReactNode } from 'react';

interface FlexboxProps {
  children: ReactNode;
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  className?: string;
}

export const Flexbox: React.FC<FlexboxProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  alignItems = 'start',
  className,
}: FlexboxProps) => {
  const flexClasses = `flex flex-${direction} justify-${justify} items-${alignItems} ${className}`;

  return <div className={flexClasses}>{children}</div>;
};



