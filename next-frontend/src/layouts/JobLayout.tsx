import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function JobLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      <div className="flex   divide-x-2" >
          {children}
      </div>
    </div>
  );
}
