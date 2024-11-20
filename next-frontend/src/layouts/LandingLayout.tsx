import LandingNav from "@/components/Navbar";

import { ReactNode } from "react";
interface LandingLayoutProps {
  children: ReactNode;
}
const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LandingNav />
      <main className="p-4">{children}</main>
    </div>
  );
};
export default LandingLayout;
