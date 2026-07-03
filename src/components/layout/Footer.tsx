import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";
import { FOOTER_NAV_ITEMS } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/40 border-t border-border mt-auto">
      <div className="max-w-7xl lg:max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Info column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-sm">
                M
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <strong className="text-foreground">Email:</strong> {SITE_CONFIG.email}
              </span>
              <span className="flex items-center gap-2">
                <strong className="text-foreground">Phone:</strong> {SITE_CONFIG.telephone}
              </span>
              <span className="flex items-center gap-2">
                <strong className="text-foreground">Location:</strong> {SITE_CONFIG.address}
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_NAV_ITEMS).map(([key, section]) => (
            <div key={key} className="flex flex-col gap-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SITE_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
