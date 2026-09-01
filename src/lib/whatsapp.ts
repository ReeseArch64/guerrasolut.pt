import { CONTACT } from '../config/site';

/** `PRODUCTS.md` §7 — mensagem por defeito dos links directos de WhatsApp. */
export const WHATSAPP_DEFAULT =
  'Olá Guerra Solut! Gostaria de falar sobre um trabalho que preciso de fazer. Pode ajudar-me?';

/**
 * URL do WhatsApp com a mensagem já composta.
 * `wa.me` exige a mensagem em `?text=`, percent-encoded.
 */
export function whatsappUrl(message: string = WHATSAPP_DEFAULT): string {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
