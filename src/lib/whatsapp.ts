export interface BuildWhatsAppUrlOptions {
  phone: string;
  message?: string;
}

export function normalizeWhatsAppPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function buildWhatsAppUrl({
  phone,
  message,
}: BuildWhatsAppUrlOptions): string {
  const normalizedPhone = normalizeWhatsAppPhone(phone);
  const trimmedMessage = message?.trim();

  if (!trimmedMessage) {
    return `https://wa.me/${normalizedPhone}`;
  }

  const encodedMessage = encodeURIComponent(trimmedMessage).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
  );

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}
