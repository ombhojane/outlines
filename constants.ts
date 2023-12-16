import { AlignHorizontalDistributeCenter, Image, Newspaper, TextIcon } from "lucide-react";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Upload',
    icon: TextIcon,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  
  {
    label: 'Image Insights',
    icon: ImageIcon,
    color: "text-violet-700",
    bgColor: "bg-violet-700/10",
    href: '/image',
  },
  {
    label: 'Fake News Detection',
    icon: Newspaper,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Documentation',
    icon: AlignHorizontalDistributeCenter,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/settings',
  },
];
