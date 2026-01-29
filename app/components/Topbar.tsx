'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@heroui/navbar'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Button } from '@heroui/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { IconMenu } from '@tabler/icons-react'

const SECTIONS = [
  { id: 'projects', label: 'topbar.first' },
  { id: 'about', label: 'topbar.second' },
  { id: 'experience', label: 'topbar.third' },
]

export default function Topbar() {
  const { t, i18n: i18nextInstance } = useTranslation()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id)

      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [i18nextInstance.language])

  return (
    <>
      <Navbar
        className="hidden md:flex !bg-transparent"
        isBlurred={false}
        maxWidth="full"
        shouldHideOnScroll={false}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarBrand className="hidden md:flex">
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-inherit text-xl tracking-[-0.08rem]">
              {t('general.name')}
            </p>
          </div>
        </NavbarBrand>

        <NavbarContent className="gap-6 hidden md:flex" justify="end">
          {SECTIONS.map(({ id, label }) => (
            <NavbarItem key={id}>
              <a
                className={
                  activeSection === id
                    ? 'uppercase text-foreground font-semibold text-lg'
                    : 'uppercase text-foreground font-semibold text-lg'
                }
                href={`#${id}`}
              >
                {t(label)}
              </a>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>

      <div
        className="
        md:hidden
        fixed top-0 left-0 right-0
        z-50
        flex items-center justify-between
        px-4
        h-14
        bg-transparent
      "
      >
        <div className="flex items-center">
          <p className="font-bold text-lg">{t('general.name')}</p>
        </div>

        <div className="flex items-center">
          <Dropdown className="font-poppins" placement="bottom-start">
            <DropdownTrigger>
              <Button disableAnimation isIconOnly aria-label="Menu" variant="light">
                <IconMenu />
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Mobile navigation">
              {SECTIONS.map(({ id, label }) => (
                <DropdownItem
                  key={id}
                  className="text-center uppercase font-semibold"
                  href={`#${id}`}
                >
                  {t(label)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}
