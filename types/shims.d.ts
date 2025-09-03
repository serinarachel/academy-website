// JSX intrinsic elements shim to avoid implicit any errors during linting
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Module shims for environments where type resolution is unavailable at lint time
declare module 'next';
declare module 'next/link' {
  const Link: any;
  export default Link;
}
declare module 'next/script' {
  const Script: any;
  export default Script;
}
declare module 'next/navigation' {
  export const useRouter: any;
  export const usePathname: any;
  export const useSearchParams: any;
}
declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module 'lucide-react' {
  export const CheckCircle: any;
  export const Phone: any;
  export const MessageCircle: any;
  export const MapPin: any;
  export const Clock: any;
  export const ArrowRight: any;
  export const Users: any;
  export const IndianRupee: any;
  export const Star: any;
  export const Zap: any;
  export const Target: any;
  export const Menu: any;
  export const X: any;
  export const Award: any;
}
