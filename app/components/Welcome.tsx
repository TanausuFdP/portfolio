'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Button, Spacer } from '@heroui/react'
import { IconDownload } from '@tabler/icons-react'

export default function Welcome() {
  const { t, i18n: i18nextInstance } = useTranslation()

  return (
    <section
      className="max-w-full mx-auto flex flex-col items-center text-center"
      id={t('topbar.first')}
    >
      <div className="font-bold uppercase leading-[1.15]">
        <span className="block text-[1.25rem] sm:text-[2rem] tracking-tight">
          {t('welcome.first')}
        </span>
        <Spacer y={8} />
        <span className="block text-[2.5rem] sm:text-[5rem] tracking-[-0.1rem]">
          {t('welcome.second')}
        </span>
        <span className="block text-[2.5rem] sm:text-[5rem] tracking-[-0.1rem]">
          {t('welcome.third')}
        </span>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-90 max-w-[40rem]">
        <Image alt="React" height={40} src="/welcome/react.png" width={90} />
        <Image alt="TypeScript" height={40} src="/welcome/typescript.png" width={90} />
        <Image alt="Next.js" height={40} src="/welcome/nextjs.png" width={75} />
        <Image alt="Node.js" height={40} src="/welcome/nodejs.png" width={80} />
        <Image alt="TailwindCSS" height={40} src="/welcome/tailwind.png" width={80} />
        <Image alt="Jira" height={40} src="/welcome/jira.png" width={80} />
        <Image alt="Confluence" height={40} src="/welcome/confluence.png" width={120} />
        <Image alt="git" height={40} src="/welcome/git.png" width={70} />
        <Image alt="GitHub" height={40} src="/welcome/github.png" width={70} />
      </div>

      <div className="mt-10">
        <Button
          className="bg-foreground"
          color="primary"
          radius="sm"
          size="lg"
          startContent={<IconDownload size={20} />}
          onPress={() => window.open('/cv/CV-' + i18nextInstance.language + '_v5.pdf', '_blank')}
        >
          {t('welcome.download_button')}
        </Button>
      </div>
      <Spacer y={40} />
    </section>
  )
}
