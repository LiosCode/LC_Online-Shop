'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
// import { Logo } from '../components/Logo'
import { NavLink } from '../components/NavLink'
import Image from 'next/image'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="#Konzerte">Konzerte</MobileNavLink>
        <MobileNavLink href="#Gutscheine">Gutscheine</MobileNavLink>
        <MobileNavLink href="https://www.gunitbrands.com">Fanshop</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href="/login">Anmelden</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}


export function Header() {
  return (
    <header className="py-1">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link className="invert" href="#" aria-label="Home">
              <Image src={'/icon.png'} width={80} height={80} />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#Konzerte">Service</NavLink>
              <NavLink href="#Gutscheine">About</NavLink>
              <NavLink href="#Fanshop">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
           {/* Anmelde Button navbar ganz oben */}
            <div className="hidden md:block">
              <NavLink href="/Login">Login</NavLink>
            </div>
           {/* Header Regristrierbutton TextInfo und Buttongrundfarbe/Text farbe und Hover wird in einem anderen file definiert */}
            <Button href="/Regristrieren" color="white">
              <span>
                Sign Up</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
