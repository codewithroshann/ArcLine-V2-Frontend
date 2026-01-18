import React from "react";
import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <section
      className={cn(
        `selection:bg-secondary mx-auto max-w-7xl py-6 selection:text-white dark:selection:text-zinc-800`,
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Container;
