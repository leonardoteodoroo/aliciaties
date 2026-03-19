import type { AnchorHTMLAttributes, ReactNode } from "react";
import { siteConfig } from "../../config/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

interface WhatsappButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  message?: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function WhatsappButton({
  children,
  className = "",
  message,
  variant = "primary",
  ...props
}: WhatsappButtonProps) {
  const href = buildWhatsAppUrl({
    phone: siteConfig.whatsapp.phone,
    message: message ?? siteConfig.whatsapp.defaultMessage,
  });

  return (
    <a
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`.trim()}
      href={href}
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <span>{children}</span>
    </a>
  );
}
