import { motion, useScroll, useTransform } from "motion/react";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import {
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  CodeXml,
  TrendingUp,
} from "lucide-react";
import { IconNorthStar } from "@tabler/icons-react";
import Container from "@/components/Container";

const steps = [
  {
    step: "01",
    title: "Understand Your Vision",
    description:
      "We start by understanding your business goals, target audience, and technical requirements to ensure the right solution.",
    icon: "Lightbulb",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Our team creates a clear roadmap, defining the right technologies, timelines, and scalable architecture for your project.",
    icon: "CodeXml",
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "We design intuitive user experiences and build high-performance websites, apps, and software tailored to your needs.",
    icon: "Rocket",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description:
      "Every feature is thoroughly tested to ensure security, performance, and a seamless user experience across devices.",
    icon: "ShieldCheck",
  },
  {
    step: "05",
    title: "Launch & Deployment",
    description:
      "We deploy your product smoothly using modern cloud infrastructure, ensuring reliability and scalability from day one.",
    icon: "Network",
  },
  {
    step: "06",
    title: "Support & Growth",
    description:
      "After launch, we provide ongoing support, optimization, and improvements to help your business scale confidently.",
    icon: "TrendingUp",
  },
];

const icons = {
  Lightbulb,
  CodeXml,
  Rocket,
  ShieldCheck,
  Network,
  TrendingUp,
};

const illustrations = {
  "01": (
    <div className="flex h-48 w-full items-center justify-center">
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow1">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Orbital rings */}
        <circle
          cx="120"
          cy="90"
          r="70"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="120"
          cy="90"
          r="55"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Central lightbulb icon */}
        <g filter="url(#shadow1)">
          <circle
            cx="120"
            cy="90"
            r="28"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1.5"
          />
          <circle cx="120" cy="90" r="18" fill="#fbbf24" opacity="0.15" />
          <path
            d="M 120 78 Q 127 78 127 85 Q 127 92 120 95 Q 113 92 113 85 Q 113 78 120 78"
            fill="#fbbf24"
            opacity="0.7"
          />
          <rect x="117" y="95" width="6" height="3" rx="1" fill="#d1d5db" />
          <rect x="118" y="98" width="4" height="2" rx="0.5" fill="#9ca3af" />
        </g>

        {/* Floating UI elements around */}
        <g transform="translate(60, 50)" filter="url(#shadow1)">
          <rect
            x="0"
            y="0"
            width="32"
            height="28"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect x="4" y="4" width="24" height="3" rx="1.5" fill="#f3f4f6" />
          <rect x="4" y="10" width="18" height="3" rx="1.5" fill="#e5e7eb" />
          <rect x="4" y="16" width="20" height="3" rx="1.5" fill="#e5e7eb" />
          <circle cx="7" cy="23" r="2" fill="#fbbf24" />
        </g>

        <g transform="translate(148, 45)" filter="url(#shadow1)">
          <rect
            x="0"
            y="0"
            width="36"
            height="32"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect x="4" y="4" width="10" height="10" rx="2" fill="#fef3c7" />
          <rect x="17" y="6" width="14" height="2" rx="1" fill="#f3f4f6" />
          <rect x="17" y="10" width="10" height="2" rx="1" fill="#e5e7eb" />
          <rect x="4" y="18" width="28" height="2" rx="1" fill="#f3f4f6" />
          <rect x="4" y="23" width="22" height="2" rx="1" fill="#e5e7eb" />
        </g>

        <g transform="translate(70, 110)" filter="url(#shadow1)">
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <path
            d="M 8 12 L 11 15 L 16 9"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <g transform="translate(156, 115)" filter="url(#shadow1)">
          <circle
            cx="10"
            cy="10"
            r="10"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect
            x="6"
            y="6"
            width="8"
            height="8"
            rx="1"
            fill="#fbbf24"
            opacity="0.5"
          />
          <circle cx="10" cy="10" r="4" fill="#fbbf24" />
        </g>

        {/* Connection lines */}
        <line
          x1="92"
          y1="70"
          x2="76"
          y2="64"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.5"
        />
        <line
          x1="148"
          y1="70"
          x2="164"
          y2="61"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.5"
        />
        <line
          x1="95"
          y1="108"
          x2="82"
          y2="118"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.5"
        />
        <line
          x1="145"
          y1="108"
          x2="162"
          y2="121"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.5"
        />
      </svg>
    </div>
  ),
  "02": (
    <div className="flex h-48 w-full items-center justify-center">
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow2">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Timeline path */}
        <path
          d="M 40 90 L 80 70 L 120 70 L 160 90 L 200 90"
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6,4"
          opacity="0.6"
        />

        {/* Node 1 - Start */}
        <g transform="translate(40, 90)" filter="url(#shadow2)">
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="white"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="6" fill="#0ea5e9" />
          <rect
            x="-16"
            y="24"
            width="32"
            height="24"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect x="-12" y="28" width="24" height="2" rx="1" fill="#f3f4f6" />
          <rect x="-12" y="33" width="18" height="2" rx="1" fill="#e5e7eb" />
          <rect x="-12" y="38" width="20" height="2" rx="1" fill="#e5e7eb" />
        </g>

        {/* Node 2 - Planning */}
        <g transform="translate(80, 70)" filter="url(#shadow2)">
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="white"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#dbeafe" />
          <rect x="-6" y="-4" width="12" height="2" rx="1" fill="#0ea5e9" />
          <rect
            x="-6"
            y="0"
            width="8"
            height="2"
            rx="1"
            fill="#0ea5e9"
            opacity="0.6"
          />
        </g>

        {/* Node 3 - Development */}
        <g transform="translate(120, 70)" filter="url(#shadow2)">
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="white"
            stroke="#8b5cf6"
            strokeWidth="2"
          />
          <rect x="-7" y="-7" width="14" height="14" rx="2" fill="#f3e8ff" />
          <line
            x1="-4"
            y1="-3"
            x2="4"
            y2="-3"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="-4"
            y1="0"
            x2="1"
            y2="0"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="-4"
            y1="3"
            x2="3"
            y2="3"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Node 4 - Testing */}
        <g transform="translate(160, 90)" filter="url(#shadow2)">
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="white"
            stroke="#10b981"
            strokeWidth="2"
          />
          <path
            d="M -6 0 L -2 4 L 6 -5"
            stroke="#10b981"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Node 5 - Launch */}
        <g transform="translate(200, 90)" filter="url(#shadow2)">
          <circle
            cx="0"
            cy="0"
            r="18"
            fill="white"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="9" fill="#fef3c7" />
          <circle cx="0" cy="0" r="5" fill="#f59e0b" />
          <rect
            x="-16"
            y="-38"
            width="32"
            height="24"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect x="-12" y="-34" width="24" height="3" rx="1.5" fill="#fef3c7" />
          <rect
            x="-8"
            y="-28"
            width="16"
            height="8"
            rx="2"
            fill="#f59e0b"
            opacity="0.3"
          />
        </g>
      </svg>
    </div>
  ),
  "03": (
    <div className="flex h-48 w-full items-center justify-center">
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow3">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Main design canvas */}
        <g transform="translate(120, 90)" filter="url(#shadow3)">
          <rect
            x="-80"
            y="-60"
            width="160"
            height="120"
            rx="6"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1.5"
          />

          {/* Toolbar */}
          <rect x="-76" y="-56" width="152" height="8" rx="4" fill="#f9fafb" />
          <circle cx="-68" cy="-52" r="2" fill="#ef4444" />
          <circle cx="-62" cy="-52" r="2" fill="#f59e0b" />
          <circle cx="-56" cy="-52" r="2" fill="#10b981" />

          {/* Design elements */}
          <g transform="translate(-50, -30)">
            <rect
              x="0"
              y="0"
              width="50"
              height="50"
              rx="4"
              fill="#faf5ff"
              stroke="#e9d5ff"
              strokeWidth="1"
            />
            <rect
              x="8"
              y="8"
              width="34"
              height="4"
              rx="2"
              fill="#8b5cf6"
              opacity="0.3"
            />
            <rect
              x="8"
              y="16"
              width="26"
              height="4"
              rx="2"
              fill="#8b5cf6"
              opacity="0.2"
            />
            <rect
              x="8"
              y="24"
              width="30"
              height="4"
              rx="2"
              fill="#8b5cf6"
              opacity="0.2"
            />
            <rect
              x="8"
              y="34"
              width="34"
              height="10"
              rx="2"
              fill="#8b5cf6"
              opacity="0.4"
            />
          </g>

          <g transform="translate(10, -30)">
            <rect
              x="0"
              y="0"
              width="50"
              height="35"
              rx="4"
              fill="#eff6ff"
              stroke="#dbeafe"
              strokeWidth="1"
            />
            <rect
              x="6"
              y="6"
              width="12"
              height="12"
              rx="2"
              fill="#3b82f6"
              opacity="0.3"
            />
            <rect x="22" y="8" width="22" height="2" rx="1" fill="#93c5fd" />
            <rect x="22" y="13" width="16" height="2" rx="1" fill="#bfdbfe" />
            <rect
              x="6"
              y="24"
              width="38"
              height="6"
              rx="2"
              fill="#3b82f6"
              opacity="0.2"
            />
          </g>

          <g transform="translate(-50, 30)">
            <rect
              x="0"
              y="0"
              width="110"
              height="22"
              rx="4"
              fill="#f0fdf4"
              stroke="#dcfce7"
              strokeWidth="1"
            />
            <rect
              x="6"
              y="6"
              width="18"
              height="10"
              rx="2"
              fill="#10b981"
              opacity="0.3"
            />
            <rect x="28" y="8" width="36" height="2" rx="1" fill="#86efac" />
            <rect x="28" y="13" width="28" height="2" rx="1" fill="#bbf7d0" />
            <circle cx="95" cy="11" r="6" fill="#10b981" opacity="0.2" />
          </g>
        </g>

        {/* Floating tools palette */}
        <g transform="translate(30, 90)" filter="url(#shadow3)">
          <rect
            x="0"
            y="-30"
            width="24"
            height="60"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <circle cx="12" cy="-20" r="5" fill="#8b5cf6" opacity="0.3" />
          <rect
            x="6"
            y="-6"
            width="12"
            height="8"
            rx="2"
            fill="#3b82f6"
            opacity="0.3"
          />
          <path d="M 12 10 L 7 20 L 17 20 Z" fill="#10b981" opacity="0.3" />
        </g>
      </svg>
    </div>
  ),
  "04": (
    <div className="flex h-48 w-full items-center justify-center">
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow4">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Protection rings */}
        <circle
          cx="120"
          cy="90"
          r="68"
          fill="none"
          stroke="#d1fae5"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle
          cx="120"
          cy="90"
          r="52"
          fill="none"
          stroke="#a7f3d0"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Central shield */}
        <g transform="translate(120, 90)" filter="url(#shadow4)">
          <path
            d="M 0 -36 L 28 -24 L 28 0 Q 28 16 0 32 Q -28 16 -28 0 L -28 -24 Z"
            fill="white"
            stroke="#10b981"
            strokeWidth="2"
          />
          <path
            d="M 0 -30 L 22 -20 L 22 0 Q 22 12 0 24 Q -22 12 -22 0 L -22 -20 Z"
            fill="#ecfdf5"
            stroke="none"
          />
          <path
            d="M -10 -4 L -4 4 L 12 -14"
            stroke="#10b981"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Test checkboxes */}
        <g transform="translate(60, 60)" filter="url(#shadow4)">
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="4"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          <path
            d="M 7 12 L 10 15 L 17 8"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <g transform="translate(156, 55)" filter="url(#shadow4)">
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="4"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          <path
            d="M 7 12 L 10 15 L 17 8"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <g transform="translate(65, 115)" filter="url(#shadow4)">
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="4"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          <path
            d="M 7 12 L 10 15 L 17 8"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <g transform="translate(151, 120)" filter="url(#shadow4)">
          <rect
            x="0"
            y="0"
            width="24"
            height="24"
            rx="4"
            fill="white"
            stroke="#d1d5db"
            strokeWidth="1"
          />
          <circle cx="12" cy="12" r="6" fill="#10b981" opacity="0.2" />
        </g>

        {/* Status indicators */}
        <g transform="translate(75, 160)">
          <rect x="0" y="0" width="90" height="6" rx="3" fill="#f3f4f6" />
          <rect x="2" y="1" width="70" height="4" rx="2" fill="#10b981" />
        </g>
      </svg>
    </div>
  ),
  "05": (
    <div className="flex h-48 w-full items-center justify-center">
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow5">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
          <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Launch platform */}
        <ellipse
          cx="120"
          cy="155"
          rx="60"
          ry="12"
          fill="#e0f2fe"
          opacity="0.6"
        />

        {/* Rocket */}
        <g transform="translate(120, 90)" filter="url(#shadow5)">
          <rect
            x="-16"
            y="-40"
            width="32"
            height="70"
            rx="4"
            fill="url(#rocketGrad)"
          />
          <path d="M -16 -40 Q 0 -52 16 -40" fill="white" opacity="0.2" />
          <circle cx="0" cy="-20" r="8" fill="white" opacity="0.3" />
          <circle cx="0" cy="-20" r="5" fill="white" opacity="0.5" />
          <rect
            x="-12"
            y="-5"
            width="24"
            height="3"
            rx="1.5"
            fill="white"
            opacity="0.2"
          />
          <rect
            x="-12"
            y="5"
            width="24"
            height="3"
            rx="1.5"
            fill="white"
            opacity="0.2"
          />
          <polygon points="-16,30 -24,50 -16,46" fill="#0284c7" />
          <polygon points="16,30 24,50 16,46" fill="#0284c7" />
          <rect
            x="-12"
            y="30"
            width="24"
            height="12"
            rx="2"
            fill="#f59e0b"
            opacity="0.4"
          />
          <rect
            x="-8"
            y="36"
            width="16"
            height="8"
            rx="1"
            fill="#fbbf24"
            opacity="0.6"
          />
        </g>

        {/* Cloud nodes */}
        <g transform="translate(50, 50)" filter="url(#shadow5)">
          <rect
            x="0"
            y="0"
            width="32"
            height="24"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="4" fill="#dbeafe" />
          <circle cx="16" cy="12" r="5" fill="#bfdbfe" />
          <circle cx="22" cy="10" r="4" fill="#93c5fd" />
        </g>

        <g transform="translate(158, 45)" filter="url(#shadow5)">
          <rect
            x="0"
            y="0"
            width="32"
            height="24"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <rect
            x="4"
            y="6"
            width="6"
            height="12"
            rx="1"
            fill="#3b82f6"
            opacity="0.3"
          />
          <rect
            x="12"
            y="8"
            width="6"
            height="10"
            rx="1"
            fill="#3b82f6"
            opacity="0.5"
          />
          <rect
            x="20"
            y="4"
            width="6"
            height="14"
            rx="1"
            fill="#3b82f6"
            opacity="0.7"
          />
        </g>

        {/* Connection lines */}
        <line
          x1="82"
          y1="62"
          x2="104"
          y2="70"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.5"
        />
        <line
          x1="158"
          y1="57"
          x2="136"
          y2="65"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="3,2"
          opacity="0.5"
        />
      </svg>
    </div>
  ),
  "06": (
    <div className="flex h-48 w-full items-center justify-center">
      <svg
        viewBox="0 0 240 180"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadow6">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Chart container */}
        <g transform="translate(120, 90)" filter="url(#shadow6)">
          <rect
            x="-90"
            y="-65"
            width="180"
            height="130"
            rx="6"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1.5"
          />

          {/* Chart title area */}
          <rect x="-82" y="-57" width="164" height="12" rx="2" fill="#f9fafb" />
          <rect x="-78" y="-52" width="60" height="3" rx="1.5" fill="#d1d5db" />
          <rect x="60" y="-54" width="24" height="6" rx="2" fill="#f3f4f6" />

          {/* Y-axis labels */}
          <text x="-78" y="-28" fontSize="8" fill="#9ca3af" textAnchor="end">
            100
          </text>
          <text x="-78" y="-8" fontSize="8" fill="#9ca3af" textAnchor="end">
            75
          </text>
          <text x="-78" y="12" fontSize="8" fill="#9ca3af" textAnchor="end">
            50
          </text>
          <text x="-78" y="32" fontSize="8" fill="#9ca3af" textAnchor="end">
            25
          </text>
          <text x="-78" y="52" fontSize="8" fill="#9ca3af" textAnchor="end">
            0
          </text>

          {/* Grid lines */}
          <line
            x1="-72"
            y1="-30"
            x2="82"
            y2="-30"
            stroke="#f3f4f6"
            strokeWidth="1"
          />
          <line
            x1="-72"
            y1="-10"
            x2="82"
            y2="-10"
            stroke="#f3f4f6"
            strokeWidth="1"
          />
          <line
            x1="-72"
            y1="10"
            x2="82"
            y2="10"
            stroke="#f3f4f6"
            strokeWidth="1"
          />
          <line
            x1="-72"
            y1="30"
            x2="82"
            y2="30"
            stroke="#f3f4f6"
            strokeWidth="1"
          />
          <line
            x1="-72"
            y1="50"
            x2="82"
            y2="50"
            stroke="#f3f4f6"
            strokeWidth="1"
          />

          {/* Bar chart - alternating colors like reference image */}
          <rect x="-64" y="-10" width="12" height="60" rx="2" fill="#0f172a" />
          <rect x="-48" y="10" width="12" height="40" rx="2" fill="#f59e0b" />
          <rect x="-32" y="-25" width="12" height="75" rx="2" fill="#0f172a" />
          <rect x="-16" y="5" width="12" height="45" rx="2" fill="#f59e0b" />
          <rect x="0" y="-35" width="12" height="85" rx="2" fill="#0f172a" />
          <rect x="16" y="-5" width="12" height="55" rx="2" fill="#f59e0b" />
          <rect x="32" y="-20" width="12" height="70" rx="2" fill="#0f172a" />
          <rect x="48" y="15" width="12" height="35" rx="2" fill="#f59e0b" />
          <rect x="64" y="-15" width="12" height="65" rx="2" fill="#0f172a" />

          {/* X-axis labels */}
          <text x="-58" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Jan
          </text>
          <text x="-42" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Feb
          </text>
          <text x="-26" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Mar
          </text>
          <text x="-10" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Apr
          </text>
          <text x="6" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            May
          </text>
          <text x="22" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Jun
          </text>
          <text x="38" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Jul
          </text>
          <text x="54" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Aug
          </text>
          <text x="70" y="60" fontSize="7" fill="#9ca3af" textAnchor="middle">
            Sep
          </text>
        </g>

        {/* Growth indicator */}
        <g transform="translate(60, 30)" filter="url(#shadow6)">
          <rect
            x="0"
            y="0"
            width="48"
            height="24"
            rx="4"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <text x="8" y="10" fontSize="8" fill="#9ca3af">
            Growth
          </text>
          <text x="8" y="19" fontSize="10" fill="#10b981" fontWeight="600">
            +32%
          </text>
        </g>
      </svg>
    </div>
  ),
};

const StickyCard = ({
  step,
  title,
  description,
  icon,
  i,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const Icon = icons[icon];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 mx-auto flex w-full max-w-5xl items-center justify-center px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 150}px)`,
        }}
        className="relative w-full origin-top"
      >
        <div className="bg-card overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md dark:border-neutral-600">
          <div className="grid gap-0 md:grid-cols-2">
            {/* TEXT */}
            <div className="flex h-78 flex-col justify-center p-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-secondary inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-sm font-semibold">
                  {step}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-600">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="font-zalando text-forground mb-3 text-xl font-semibold">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>

            {/* ILLUSTRATION */}
            <div className="flex h-64 items-center justify-center border-t border-green-600 bg-[radial-gradient(var(--color-neutral-400)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] md:h-auto md:border-t-0 md:border-l dark:bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]">
              {illustrations[step]}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WhyChooseUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pt-[5vh] pb-[50vh]"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center space-y-4 text-center"
          >
            <span className="text-secondary font-zalando font-normal uppercase">
              {" "}
              <IconNorthStar className="mr-2 inline" />
              Our Approach
            </span>
            <h2 className="font-zalando text-3xl tracking-tight md:text-4xl">
              How We Deliver <span className="text-secondary">Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl md:text-lg">
              We build scalable digital solutions through a clear,
              results-driven process focused on performance and growth.
            </p>
          </motion.div>

          {steps.map((s, i) => {
            const targetScale = Math.max(0.5, 1 - (steps.length - i - 1) * 0.1);
            return (
              <StickyCard
                key={`p_${i}`}
                i={i}
                step={s.step} // pass the step string like "01", "02"
                title={s.title}
                description={s.description}
                icon={s.icon}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </Container>
      </main>
    </>
  );
};

export default WhyChooseUs;
