import { CONTACT } from '../config/site';

export const WHATSAPP_DEFAULT =
  'Olá Guerra Solut! Gostaria de falar sobre um trabalho que preciso de fazer. Pode ajudar-me?';

export function whatsappUrl(message: string = WHATSAPP_DEFAULT): string {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
