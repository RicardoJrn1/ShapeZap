import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://facebook.com',
    icon: <Facebook className="h-6 w-6" />,
    name: 'Facebook',
  },
  {
    href: 'https://instagram.com',
    icon: <Instagram className="h-6 w-6" />,
    name: 'Instagram',
  },
  {
    href: 'https://twitter.com',
    icon: <Twitter className="h-6 w-6" />,
    name: 'Twitter',
  },
];

const footerLinks = [
  { href: '/about', label: 'Sobre nós' },
  { href: '/contact', label: 'Contato' },
  { href: '/terms', label: 'Termos de Serviço' },
  { href: '/privacy', label: 'Política de Privacidade' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-foreground/80">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-foreground">ShapeZap IA</p>
            <p className="mt-1 text-sm">
              Seu assistente nutricional no WhatsApp.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center gap-6 md:justify-start">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-foreground/60">© {new Date().getFullYear()} ShapeZap IA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}