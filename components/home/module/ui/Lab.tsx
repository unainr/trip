import { Dog, Map as MapIcon, User } from "lucide-react"
import Phototab, { PhototabTab } from "./PhotoLab"

// Placeholder images (replace with your own if available)
const Images = [
  "https://images.unsplash.com/photo-1625745184494-0edbf8269938?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1705054476413-4aed25209459?=webp&fit=crop&w=800&fit=max",
  "https://images.unsplash.com/photo-1591282063405-1752516fd16e?=webp&fit=crop&w=800&fit=max",
]

const tabs: PhototabTab[] = [
  {
    name: "one",
    image: Images[0],
    icon: <User />,
  },
  {
    name: "two",
    image: Images[1],
    icon: <Dog />,
  },
  {
    name: "three",
    image: Images[2],
    icon: <MapIcon />,
  },
]

export default function Lab() {
  return (
    <Phototab tabs={tabs} defaultTab="one" />
  )
}