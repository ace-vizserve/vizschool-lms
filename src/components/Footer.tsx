import { footerLinks, footerLinks2, socialMediaLinks, talkToUsLinks } from '@/assets/data/footer-items'
import { GlobeLockIcon, HandshakeIcon, MapIcon, TicketSlashIcon } from 'lucide-react'
import MaxWidthWrapper from './max-width-wrapper'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer = () => {
  return (
    <footer className="tw:bg-[#343434]">
      <MaxWidthWrapper className="tw:space-y-10 tw:sm:space-y-14 tw:md:space-y-14 tw:lg:space-y-20 tw:py-16">
        <div className="tw:w-full tw:flex tw:flex-wrap tw:lg:flex-nowrap">
          <div className="tw:w-full tw:flex tw:flex-wrap">
            <div className="tw:w-1/2 tw:space-y-4">
              <p className="tw:text-white tw:font-bold tw:text-lg">{footerLinks[0].title}</p>
              <div className="tw:space-y-2">
                {footerLinks[0].items.map((item, i) => (
                  <p key={i} className="tw:text-white tw:text-xs tw:md:text-sm">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="tw:w-1/2 tw:space-y-7">
              <div className="tw:space-y-4 tw:w-full tw:md:w-44">
                <p className="tw:text-white tw:font-bold tw:text-lg">{footerLinks2[0].title}</p>
                <div className="tw:w-full tw:flex tw:justify-between">
                  <div className="tw:space-y-2">
                    {footerLinks2[0].items.slice(0, 3).map((item, i) => (
                      <p key={i} className="tw:text-white tw:text-xs tw:md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="tw:space-y-2">
                    {footerLinks2[0].items.slice(3).map((item, i) => (
                      <p key={i} className="tw:text-white tw:text-xs tw:md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tw:space-y-4 tw:w-full tw:md:w-52">
                <p className="tw:text-white tw:font-bold tw:text-lg">{footerLinks2[1].title}</p>
                <div className="tw:w-full tw:flex tw:justify-between">
                  <div className="tw:space-y-2">
                    {footerLinks2[1].items.slice(0, 2).map((item, i) => (
                      <p key={i} className="tw:text-white tw:text-xs tw:md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="tw:space-y-2">
                    {footerLinks2[1].items.slice(2).map((item, i) => (
                      <p key={i} className="tw:text-white tw:text-xs tw:md:text-sm">
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tw:py-10 tw:lg:py-0 tw:grow tw:flex tw:flex-wrap tw:flex-col tw:justify-center tw:lg:justify-start tw:w-full tw:md:w-1/2 tw:space-y-4">
            <p className="tw:text-center tw:lg:text-right tw:text-white tw:text-2xl tw:font-bold">Subscribe to Our Newsletter!</p>
            <div className="tw:flex tw:items-center tw:relative">
              <Input placeholder="Your email address" className="tw:bg-white tw:text-sm tw:py-6 tw:w-full" />
              <div className="tw:right-4 tw:z-10 tw:absolute">
                <Button size={'sm'}>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-8">
          <div className="tw:w-max tw:mx-auto tw:md:mx-0 tw:space-y-4 tw:md:w-52">
            <p className="tw:text-white tw:font-bold tw:text-lg tw:text-center tw:md:text-start">Follow us</p>
            <div className="tw:flex tw:items-center tw:gap-4">
              {socialMediaLinks.map((link) => (
                <img key={link.icon} className="tw:size-6" src={link.icon} />
              ))}
            </div>
          </div>
          <div className="tw:space-y-4">
            <p className="tw:text-white tw:font-bold tw:text-lg">Talk to us</p>
            <div className="tw:flex tw:flex-col tw:justify-center tw:gap-4">
              {talkToUsLinks.map((item) => (
                <div key={item.details} className="tw:flex tw:items-center gap-2">
                  <item.icon className="tw:stroke-white tw:size-4" />
                  <span className="tw:text-white tw:text-xs tw:text-balance tw:-tracking-tighter">{item.details}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tw:w-full tw:col-span-full tw:lg:col-span-1 tw:grid tw:grid-cols-2 tw:gap-6">
            <div className="tw:flex tw:items-center tw:gap-2">
              <HandshakeIcon className="tw:stroke-primary" />
              <span className="tw:text-xs tw:text-primary tw:font-medium">Terms and conditions</span>
            </div>
            <div className="tw:justify-end tw:flex tw:items-center tw:gap-2">
              <TicketSlashIcon className="tw:stroke-primary" />
              <span className="tw:text-xs tw:text-primary tw:font-medium">Refund Policy</span>
            </div>
            <div className="tw:flex tw:items-center tw:gap-2">
              <GlobeLockIcon className="tw:stroke-primary" />
              <span className="tw:text-xs tw:text-primary tw:font-medium">Privacy Policy</span>
            </div>
            <div className="tw:justify-end tw:flex tw:items-center tw:gap-2">
              <MapIcon className="tw:stroke-primary" />
              <span className="tw:text-xs tw:text-primary tw:font-medium">Sitemap</span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="tw:h-0.5 tw:w-full tw:bg-white" />
      <MaxWidthWrapper>
        <div className="tw:py-10 tw:flex tw:flex-col tw:md:flex-row tw:justify-between tw:items-center tw:w-full">
          <h1 className="tw:text-2xl tw:md:text-4xl tw:text-white tw:font-bold">VizSchool</h1>
          <span className="tw:text-white tw:text-xs tw:-tracking-tighter">
            Copyright © {new Date().getFullYear()} VizSchool. All rights reserved.
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
