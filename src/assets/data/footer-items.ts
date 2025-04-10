import facebookLogo from '@/assets/images/footer/facebook-logo.svg'
import instagramLogo from '@/assets/images/footer/instagram-logo.svg'
import linkedinLogo from '@/assets/images/footer/linkedin-logo.svg'
import { MailIcon, MapPinnedIcon, PhoneIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

type FooterLink = {
  title: string
  items: {
    name: string
    link?: string
    icon?: IconType
  }[]
}

type FooterLinkType = {
  name: string
  link?: string
}

type SocialMediaType = {
  icon: IconType
  variant: string
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Get Started',
    items: [
      { name: 'Why VizSchool?', link: '/about' },
      { name: 'Courses', link: '/contact' },
      { name: 'Tutors' },
      { name: 'Student Reviews' },
      { name: 'Pricing & Plans' },
      { name: 'Blog' },
      { name: 'Learning Resources' },
      { name: 'Contact Us' },
    ],
  },
]

export const footerLinks2: FooterLink[] = [
  {
    title: 'Primary Classes',
    items: [
      { name: 'Primary 1', link: '/about' },
      { name: 'Primary 2', link: '/contact' },
      { name: 'Primary 3' },
      { name: 'Primary 4' },
      { name: 'Primary 5' },
      { name: 'Primary 6' },
    ],
  },
  {
    title: 'Secondary Classes',
    items: [{ name: 'Secondary 1', link: '/about' }, { name: 'Secondary 2', link: '/contact' }, { name: 'Secondary 3' }, { name: 'Secondary 4' }],
  },
]

export const talkToUsLinks = [
  {
    icon: MailIcon,
    details: 'care@vizschool.com',
  },
  {
    icon: PhoneIcon,
    details: '+65 6451 0080',
  },
  {
    icon: MapPinnedIcon,
    details: '223 Mountbatten Road, 03-08 223@Mountbatten Singapore 398008',
  },
]

export const socialMediaLinks = [
  {
    icon: facebookLogo,
    link: '#',
  },
  {
    icon: instagramLogo,
    link: '#',
  },
  {
    icon: linkedinLogo,
    link: '#',
  },
]
