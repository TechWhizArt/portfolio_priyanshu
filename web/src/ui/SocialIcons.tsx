
import type { SVGProps } from 'react'

// Simple monochrome social icons using currentColor.
// These are designed to work with the dark 3D portfolio theme.

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.5 3.8-6.5 3.8Z" />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArtStationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.2 4.2L20.8 19H16.9l-2.1-3.7H7.1L5 19H1.2L9.8 4.2c.5-.8 1.1-1.2 2.4-1.2s1.9.4 2.4 1.2zM9 12.3h4.1L11 8.7 9 12.3z" />
    </svg>
  )
}

export function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.75-2-5.5-4.7-5.5-2.15 0-3.1 1.18-3.64 2.02V8.5H9.2V21h3.46v-6.18c0-1.63.3-3.2 2.33-3.2 2 0 2.03 1.86 2.03 3.3V21H21v-7.2Z" />
    </svg>
  )
}

export function PatreonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 3h4v18H4V3Zm6 0h3.2c4.1 0 6.8 2.2 6.8 5.7 0 3.6-2.7 5.8-6.8 5.8H10V3Zm3.2 8.5c1.9 0 3-1 3-2.8 0-1.7-1.1-2.7-3-2.7H13v5.5h.2Z" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  artstation: ArtStationIcon,
  email: EmailIcon,
  linkedin: LinkedInIcon,
  patreon: PatreonIcon

}
