"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export const NavListItem  =({to, children}) => {
    const pathname = usePathname()
    const isActive = pathname === to
    console.log('pathName ==>', pathname)
    return <li className="hover:text-yellow-500">
        <Link className={isActive ?  'text-yellow-500' :''} href={to}>{children}</Link>
    </li>
}
