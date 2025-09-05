// src/components/Header.jsx
import { useState, useEffect } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#aboutus" },
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contactus" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        {/* Left Nav */}
        <div className="flex-1 flex justify-start">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className={`relative px-2 py-1 font-medium transition-all duration-300 ${
                      isScrolled ? "text-black" : "text-white"
                    } 
                    hover:text-yellow-500
                    after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-500 
                    after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <img src="/src/assets/logo.png" alt="Logo" className="h-12 w-auto md:h-16" />
        </div>

        {/* Right CTA */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <span className="text-sm text-gray-500">📍 INDUSTRIAL AREA 15 SHARJAH</span>
          <button className="px-5 py-2 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition">
            Enquire Now
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden justify-between items-center px-4 py-3">
        {/* Logo Center */}
        <div className="flex-1 flex justify-center">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Drawer */}
        <Drawer>
          <DrawerTrigger className="p-2 rounded text-white bg-yellow-500">
            ☰
          </DrawerTrigger>
          <DrawerContent className="bg-white p-6">
            <DrawerHeader>
              <DrawerTitle className="text-lg font-bold text-gray-800">
                Menu
              </DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 font-medium hover:text-yellow-500 transition"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 border-t pt-4">
              <span className="block text-sm text-gray-500 mb-2">
                📍 INDUSTRIAL AREA 15 SHARJAH
              </span>
              <button className="w-full px-5 py-2 rounded bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition">
                Enquire Now
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}

export default Header
