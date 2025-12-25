import React from 'react'
import { cn } from '@/lib/utils'

const GridCard = ({ children, className }) => {
  return (
    <>
      <div
        data-slot="card"
        className={cn(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6 border-border hover:border-secondary/50 transition-colors",
          className
        )}
      >
        {children}
      </div>
      
    </>
  );
};

export default GridCard