export default {
  server: {
    open: '/index.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        'tailwind-buttons': '/tailwind/components/buttons.html',
        'traditional-buttons': '/traditional/components/buttons.html',
        'tailwind-cards': '/tailwind/components/cards.html',
        'traditional-cards': '/traditional/components/cards.html',
        'tailwind-forms': '/tailwind/components/forms.html',
        'traditional-forms': '/traditional/components/forms.html',
        'tailwind-responsive': '/tailwind/components/responsive.html',
        'traditional-responsive': '/traditional/components/responsive.html',
        'tailwind-interactive': '/tailwind/components/interactive.html',
        'traditional-interactive': '/traditional/components/interactive.html',
        'tailwind-animations': '/tailwind/components/animations.html',
        'traditional-animations': '/traditional/components/animations.html',
        'tailwind-utilities': '/tailwind/components/utilities.html',
        'traditional-utilities': '/traditional/components/utilities.html',
        'tailwind-themes': '/tailwind/components/themes.html',
        'traditional-themes': '/traditional/components/themes.html'
      }
    }
  }
}
