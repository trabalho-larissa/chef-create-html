import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function redirectToWhatsApp(phoneNumber: string, message?: string) {
  const cleanNumber = phoneNumber.replace(/\D/g, '')
  const defaultMessage = message || "Olá! Gostaria de fazer um pedido no Casa's Burger 🍔"
  const encodedMessage = encodeURIComponent(defaultMessage)
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export function redirectToGoogleMaps(address: string) {
  const encodedAddress = encodeURIComponent(address)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  window.open(googleMapsUrl, '_blank')
}
