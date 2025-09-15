import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Logo from "./logo"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
             <Logo/>
            
            <p className="text-black/80 mb-6 text-sm leading-relaxed">
              Your trusted partner in creating extraordinary travel experiences that inspire and transform.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-[#d3803c] hover:text-white transition-all duration-200"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-[#d3803c] hover:text-white transition-all duration-200"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-[#d3803c] hover:text-white transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="p-2 hover:bg-[#d3803c] hover:text-white transition-all duration-200"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-black/70 hover:text-[#d3803c] transition-colors text-sm">
                  Home
               </Link>
              </li>
              <li>
                <Link href="/trip" className="text-black/70 hover:text-[#d3803c] transition-colors text-sm">
                  Create Trip
               </Link>
              </li>
              <li>
                <Link href="/all-trip" className="text-black/70 hover:text-[#d3803c] transition-colors text-sm">
                 All Trip
               </Link>
              </li>
             
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#d3803c] mt-0.5 flex-shrink-0" />
                <span className="text-black/70 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#d3803c] mt-0.5 flex-shrink-0" />
                <span className="text-black/70 text-sm">hello@wayferen.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#d3803c] mt-0.5 flex-shrink-0" />
                <span className="text-black/70 text-sm">123 Travel Street, Adventure City</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Stay Updated</h4>
            <p className="text-black/70 mb-4 text-sm">
              Subscribe to our newsletter for travel tips and exclusive deals.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-50 border-gray-200 text-black placeholder:text-black/50 focus:border-[#d3803c] focus:ring-[#d3803c]"
              />
              <Button className="w-full bg-[#d3803c] text-white hover:bg-[#be6b27] transition-colors duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 mt-12 pt-8 text-center">
          <p className="text-black/60 text-sm">© 2025 Wayferen Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
