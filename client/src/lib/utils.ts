import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // Format: (+xx) xxx xxx xxxx
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(+${match[1]}) ${match[2]} ${match[3]} ${match[4]}`;
  }
  
  return phone;
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Account for navbar height
      behavior: "smooth",
    });
  }
}
