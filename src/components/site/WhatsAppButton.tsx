const WHATSAPP_URL =
  "https://wa.me/393209597777?text=" +
  encodeURIComponent("Salam, vorrei informazioni sui pacchetti Hajj/Umrah.");

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chiedi informazioni su WhatsApp +39 320 9597777"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-elegant hover:scale-105 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-6 w-6 fill-current"
      aria-hidden="true"
    >
      <path d="M19.11 17.39c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32zM16.02 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.49 3.66 1.36 5.2L5.33 26.67l5.59-1.46c1.49.81 3.19 1.27 4.99 1.27h.01c5.9 0 10.71-4.8 10.71-10.71 0-2.86-1.11-5.55-3.14-7.57a10.62 10.62 0 0 0-7.57-3.14zm0 19.61h-.01c-1.6 0-3.17-.43-4.54-1.24l-.32-.19-3.32.87.89-3.24-.21-.33a8.92 8.92 0 0 1-1.36-4.74c0-4.92 4-8.92 8.92-8.92 2.38 0 4.62.93 6.31 2.62a8.86 8.86 0 0 1 2.61 6.31c0 4.92-4 8.92-8.97 8.92z" />
    </svg>
    <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
  </a>
);
