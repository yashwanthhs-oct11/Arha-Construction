import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import {
  IconBrandYoutube,
  IconBrandHipchat,
  IconBrandInstagram,
  IconHome,
  IconTools,
  IconPhotoStar,
  IconAlignBoxLeftMiddle,
} from "@tabler/icons-react";

export function HeroDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-blue-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About Us",
      icon: (
        <IconAlignBoxLeftMiddle className="h-full w-full text-purple dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Our Work",
      icon: (
        <IconTools className="h-full w-full text-green-500 dark:text-neutral-300" />
      ),
      href: "#work",
    },
    {
      title: "Gallery",
      icon: (
        <IconPhotoStar className="h-full w-full text-orange-400 dark:text-neutral-300" />
      ),
      href: "#work",
    },
    {
      title: "Testimonials",
      icon: (
        <IconBrandHipchat className="h-full w-full text-fuchsia-600 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-pink-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-red-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="h-[12rem] z-20 sm:relative sm:h-[17rem] sm:translate-x-0 sm:bottom-0 sm:left-0 fixed bottom-4 left-4">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
