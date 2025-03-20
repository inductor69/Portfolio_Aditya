import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl px-4">{children}</div>
    </div>
  );
};
