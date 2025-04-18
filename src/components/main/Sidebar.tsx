'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-[#578FCA] dark:bg-[#0B2F9F] h-screen w-16 lg:w-60 p-4 flex flex-col gap-2 items-center lg:items-start">
      {/* SECTION: Data */}
      <h2 className="text-white text-sm font-semibold uppercase hidden lg:block">Data</h2>
      <SidebarItem href="/upload" icon="/upload.png" text="Upload Data" pathname={pathname} />
      <SidebarItem href="/annotate" icon="/annotate.png" text="Annotate" pathname={pathname} />
      <SidebarItem href="/prediction" icon="/prediction.png" text="Prediction" pathname={pathname} />
      <SidebarItem href="/analytics" icon="/analytics.png" text="Analytics" pathname={pathname} />

      {/* SECTION: Models */}
      <h2 className="text-white text-sm font-semibold uppercase hidden lg:block mt-4">Models</h2>
      <SidebarItem href="/models" icon="/models.png" text="Models" pathname={pathname} />
      <SidebarItem href="/visualize" icon="/visualize.png" text="Visualize" pathname={pathname} />
    </aside>
  );
};

interface SidebarItemProps {
  href: string;
  icon: string;
  text: string;
  pathname: string;
}

const SidebarItem = ({ href, icon, text, pathname }: SidebarItemProps) => {
  return (
    <Link href={href} className={`flex items-center gap-4 p-2 rounded-md transition-all ${pathname === href ? 'bg-[#3674B5] dark:bg-[#161D6F] text-white' : 'text-white'} justify-center lg:justify-start w-full`}>
      <Image src={icon} alt={text} width={24} height={24} />
      <span className="hidden lg:block">{text}</span>
    </Link>
  );
};

export default Sidebar;
