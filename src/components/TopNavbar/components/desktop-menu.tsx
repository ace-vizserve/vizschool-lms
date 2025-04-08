import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { SearchIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function DesktopMenu() {
  return (
    <div className="tw:w-full tw:flex tw:items-center tw:justify-between tw:gap-20">
      <div className="tw:flex tw:items-center tw:gap-8">
        <NavigationMenu>
          <NavigationMenuList className="tw:!m-0 tw:!p-0">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="tw:bg-inherit">About</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="tw:grid tw:gap-3 tw:p-4 tw:md:w-[400px] tw:lg:w-[500px] tw:lg:grid-cols-[.75fr_1fr]">
                  <li className="tw:row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="tw:flex tw:h-full tw:w-full tw:select-none tw:flex-col tw:justify-end tw:rounded-md tw:bg-gradient-to-b tw:from-muted/50 to-muted tw:p-6 tw:no-underline tw:outline-none tw:focus:shadow-md"
                        href="/">
                        <div className="tw:mb-2 tw:mt-4 tw:text-lg tw:font-medium">shadcn/ui</div>
                        <p className="tw:text-sm tw:leading-tight tw:text-muted-foreground">Why VizSchool?</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <div>Re-usable components built using Radix UI and Tailwind CSS.</div>
                  <div>How to install dependencies and structure your app.</div>
                  <div>Styles for headings, paragraphs, lists...etc</div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="tw:bg-inherit">Programmes</NavigationMenuTrigger>
              <NavigationMenuContent className="tw:w-60">
                <NavigationMenuLink className="tw:text-right">Vizschool CAMPUS</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link to={'#'}>Courses</Link>
        <Link to={'#'}>Reviews</Link>
      </div>
      <div className="tw:w-full tw:flex tw:items-center tw:gap-4">
        <div className="tw:flex tw:items-center tw:w-full tw:relative">
          <Input className="tw:bg-secondary" placeholder="what do you want to learn?" />
          <SearchIcon className="tw:absolute tw:right-3" />
        </div>
        <Button size={'sm'} variant={'secondary'}>
          Login
        </Button>
        <Button size={'sm'}>Sign up</Button>
      </div>
    </div>
  )
}

export default DesktopMenu
