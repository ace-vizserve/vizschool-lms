import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button, buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, SearchIcon, Trash2Icon, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="tw:w-max tw:lg:w-full tw:flex tw:items-center tw:justify-between tw:gap-20">
      <div className="tw:hidden tw:lg:flex">
        <NavigationMenu>
          <NavigationMenuList className="tw:!m-0 tw:!p-0">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="tw:bg-inherit">About</NavigationMenuTrigger>

              <NavigationMenuContent className="tw:flex tw:items-start tw:flex-col">
                <NavigationMenuLink asChild>
                  <Link
                    to={'#'}
                    className={buttonVariants({
                      variant: 'ghost',
                    })}>
                    Why VizSchool?
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to={'#'}
                    className={buttonVariants({
                      variant: 'ghost',
                    })}>
                    Instructors
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="tw:text-black tw:font-medium">Courses</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="tw:text-black tw:font-medium">Reviews</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList className="tw:!m-0 tw:!p-0">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="tw:bg-inherit">Programmes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link
                    to={'#'}
                    className={buttonVariants({
                      variant: 'ghost',
                    })}>
                    VizSchool CAMPUS
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="tw:w-full tw:flex tw:items-center tw:gap-4">
        <SearchMobile />
        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'} variant={'ghost'} className="tw:flex tw:lg:hidden">
              <MenuIcon className="tw:stroke-black" />
            </Button>
          </SheetTrigger>
          <SheetContent className="tw:px-6 tw:md:px-8">
            <div className="tw:flex tw:flex-col tw:gap-2 tw:py-20">
              <Link className="tw:font-medium tw:py-4 tw:text-black" to={'/'}>
                Home
              </Link>
              <div className="tw:bg-primary tw:h-0.5 tw:w-full" />
              <Accordion type="single" collapsible>
                <AccordionItem className="tw:border-none" value="item-1">
                  <AccordionTrigger>About us</AccordionTrigger>
                  <AccordionContent className="tw:flex tw:flex-col tw:gap-4">
                    <Button variant={'link'} size={'sm'}>
                      Why VizSchool?
                    </Button>
                    <Button variant={'link'} size={'sm'}>
                      Instructors
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link className="tw:font-medium tw:text-black tw:py-4" to={'/'}>
                Courses
              </Link>
              <Link className="tw:font-medium tw:text-black tw:py-4" to={'/'}>
                Reviews
              </Link>
              <Accordion type="single" collapsible>
                <AccordionItem className="tw:border-none" value="item-1">
                  <AccordionTrigger>Programmes</AccordionTrigger>
                  <AccordionContent>
                    <Button className="tw:w-full" variant={'link'} size={'sm'}>
                      VizSchool CAMPUS
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button size={'sm'} variant={'secondary'}>
                Login
              </Button>
              <Button size={'sm'}>Sign up</Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="tw:hidden tw:lg:flex tw:items-center tw:w-full tw:relative">
          <Input className="tw:bg-secondary tw:placeholder:text-xs tw:text-xs" placeholder="What do you want to learn?" />
          <SearchIcon className="tw:absolute tw:right-3" />
        </div>
        <Button className="tw:hidden tw:lg:flex" variant={'secondary'}>
          Login
        </Button>
        <Button className="tw:hidden tw:lg:flex">Sign up</Button>
      </div>
    </div>
  )
}

const mockHistoryData = ['Primary 3 Courses', 'K-12 Programs', 'Free courses']

function SearchMobile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'icon'} variant={'ghost'} className="tw:flex tw:lg:hidden">
          <SearchIcon className="tw:stroke-black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="tw:max-w-xl">
        <div className="tw:py-8 tw:flex tw:items-center tw:justify-center tw:w-full tw:gap-2">
          <Input className="tw:bg-secondary tw:placeholder:text-xs tw:text-xs" placeholder="What do you want to learn?" />
          <SearchIcon />
        </div>

        <div className="tw:w-full tw:flex tw:flex-col tw:gap-2">
          <h4 className="font-bold">Search history</h4>
          <div className="tw:flex tw:flex-col tw:gap-4">
            {mockHistoryData.map((item) => (
              <div className="tw:w-full tw:flex tw:justify-between tw:items-center">
                <div className="tw:flex tw:items-center tw:gap-2">
                  <div className="tw:p-2 tw:rounded-full tw:bg-secondary">
                    <SearchIcon className="tw:stroke-muted-foreground tw:fill-secondary" />
                  </div>
                  <span className="tw:text-xs tw:font-medium tw:text-muted-foreground"> {item}</span>
                </div>
                <Button variant={'outline'} size={'icon'}>
                  <X className="tw:size-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="tw:py-6 tw:w-max tw:ml-auto">
            <Button className="tw:w-max" variant={'destructive'}>
              Clear all <Trash2Icon className="tw:size-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Menu
