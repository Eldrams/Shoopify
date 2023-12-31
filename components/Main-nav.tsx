"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'Overview',
            active: pathname === `/${params.storeId}`
        },
        {
          href: `/${params.storeId}/settings`,
          label: 'Settings',
          active: pathname === `/${params.storeId}/settings`
      },
    ];

    return (
        <nav className={cn('flex items-center space-x-4 lg:space-x-6')}>
  {routes.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={cn("text-sm font-medium transition-colors hover:text-primary p-6",
        item.active ? "text-black dark:text-white" : "text-muted-foreground")}
    >
      {item.label}
    </Link>
  ))}
</nav>
    )
};