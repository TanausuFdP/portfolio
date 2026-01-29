'use client'

import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Button } from '@heroui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Bottombar() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 750)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.split('-')[0] === 'es' ? 'en' : 'es')
  }

  return (
    <div
      className={`
        hidden md:block fixed right-6 sm:right-10 z-20
        transition-all duration-500 ease-out
        ${isScrolled ? 'bottom-6' : 'bottom-6'}
      `}
    >
      {!isScrolled && (
        <Button
          className="
            backdrop-blur
            bg-background/80
            border-border
            text-md
            px-4
          "
          radius="full"
          variant="bordered"
          onPress={toggleLanguage}
        >
          {t('general.change_language')}
        </Button>
      )}
      {isScrolled && (
        <Button
          className="
            shadow-lg
            text-md font-medium
            bg-foreground
          "
          color="primary"
          radius="full"
          startContent={<EnvelopeIcon className="w-5 h-5" />}
          onPress={() => (window.location.href = `mailto:${t('general.email')}`)}
        >
          {t('general.contact')}
        </Button>
      )}
    </div>
  )
}
