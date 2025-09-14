"use client"

import { useLayoutEffect, useRef, useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"

/**
 * Tab definition for Phototab
 */
export interface PhototabTab {
  /** Tab label */
  name: string
  /** Tab icon (ReactNode) */
  icon: React.ReactNode
  /** Tab image (string: URL or import) */
  image: string
}

export interface PhototabProps {
  /** Array of tabs to display */
  tabs: PhototabTab[]
  /** Default selected tab name */
  defaultTab?: string
  /** Class name for root */
  className?: string
  /** Class name for tab list */
  tabListClassName?: string
  /** Class name for tab trigger */
  tabTriggerClassName?: string
  /** Class name for image */
  imageClassName?: string
  /** Height of the component */
  height?: string | number
}

export default function Phototab({
  tabs,
  defaultTab,
  className = "",
  tabListClassName = "",
  tabTriggerClassName = "",
  imageClassName = "",
  height = 500,
}: PhototabProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [bgStyle, setBgStyle] = useState<{
    left: number
    top: number
    width: number
    height: number
  } | null>(null)

  const triggersRef = useRef<(HTMLButtonElement | null)[]>([])
  const listRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (
      hoveredIndex !== null &&
      triggersRef.current[hoveredIndex] &&
      listRef.current
    ) {
      const trigger = triggersRef.current[hoveredIndex]
      const listRect = listRef.current.getBoundingClientRect()
      const triggerRect = trigger!.getBoundingClientRect()
      setBgStyle({
        left: triggerRect.left - listRect.left,
        top: triggerRect.top - listRect.top,
        width: triggerRect.width,
        height: triggerRect.height,
      })
    } else {
      setBgStyle(null)
    }
  }, [hoveredIndex])

  const containerHeight = typeof height === 'number' ? `${height}px` : height

  return (
    <Tabs.Root
      className={`group relative h-full overflow-hidden ${className}`}
      defaultValue={defaultTab || (tabs[0]?.name ?? "")}
      orientation="horizontal"
      style={{ height: containerHeight, minHeight: containerHeight }}
    >
      {/* Tab Content - Images */}
      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.name}
          value={tab.name}
          className="relative w-full h-full"
        >
          <Image
            alt={tab.name}
            src={tab.image}
            fill
            priority
            className={`rounded-2xl object-cover ${imageClassName}`}
          />
        </Tabs.Content>
      ))}

      {/* Tab Buttons - Overlay on top of images */}
      <Tabs.List
        ref={listRef}
        aria-label="Phototab Tabs"
        className={`hover:text-foreground bg-primary/40 ring-border/70 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-row items-center justify-between rounded-full px-3 py-2 text-sm font-medium ring backdrop-blur-sm transition ${tabListClassName}`}
        style={{ width: 'fit-content', minWidth: '160px' }}
      >
        <AnimatePresence>
          {bgStyle && (
            <motion.span
              className="bg-primary absolute z-0 rounded-full transition-colors"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                left: bgStyle.left,
                top: bgStyle.top,
                width: bgStyle.width,
                height: bgStyle.height,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              style={{ position: "absolute" }}
            />
          )}
        </AnimatePresence>
        {tabs.map((tab, index) => (
          <Tabs.Trigger
            aria-label={tab.name}
            className={`data-[state='active']:bg-background relative z-10 rounded-full p-2 transition-colors ${tabTriggerClassName}`}
            key={tab.name}
            ref={(el: any) => {
              triggersRef.current[index] = el
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            value={tab.name}
          >
            <span className="relative z-10 rounded-full focus:outline-none">
              {tab.icon}
              <span className="sr-only">{tab.name}</span>
            </span>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}