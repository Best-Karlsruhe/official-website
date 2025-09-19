import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BEST Karlsruhe",
  description: "BEST Karlsruhe",
};

const navBarLinks: { title: string, link: string, key: number }[] = [
  { title: "Home", link: "/", key: 0 },
  { title: "About BEST", link: "/best", key: 1 },
  { title: "Events", link: "/events", key: 2 }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center">
          <div className="navbar min-h-0 shadow-sm justify-center-safe max-w-min bg-base-300 rounded-full my-4 p-3 z-10 space-x-2 fixed">
            <div className="navbar-start max-w-min min-w-max">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {
                    navBarLinks.map(navBarLink => <li key={navBarLink.key}><Link href={navBarLink.link}>{navBarLink.title}</Link></li>)
                  }
                </ul>
              </div>
              <Link href="/" className="btn btn-ghost text-xl">BEST KA</Link>
            </div>
            <div className="navbar-center hidden lg:flex max-w-min min-w-max max-h-min p-0">
              <ul className="menu menu-horizontal p-0 space-x-1">
                {
                  navBarLinks.map(navBarLink => <li key={navBarLink.key}><Link href={navBarLink.link}>{navBarLink.title}</Link></li>)
                }
              </ul>
            </div>
            <div className="navbar-end max-w-min min-w-max">
              <Link href="/contact" className="btn btn-primary">Contact</Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html >
  );
}
