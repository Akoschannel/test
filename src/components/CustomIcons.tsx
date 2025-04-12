
import React from "react";

export const Steam = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-4.28-1.007l2.746-1.098a3.43 3.43 0 0 0 2.316.836 3.45 3.45 0 0 0 3.43-3.429 3.45 3.45 0 0 0-3.43-3.43 3.46 3.46 0 0 0-3.326 2.77l-2.857 2.112A10.02 10.02 0 0 1 2 12 10 10 0 0 1 12 2zm4.586 8.001a2.53 2.53 0 0 1 2.53 2.53 2.53 2.53 0 0 1-2.53 2.527 2.53 2.53 0 0 1-2.526-2.527 2.53 2.53 0 0 1 2.526-2.53zm-9.744 6.347l-1.592.645a7.63 7.63 0 0 0 1.172.842 4.05 4.05 0 0 0 5.738-3.67 4.05 4.05 0 0 0-4.02-4.052 4.05 4.05 0 0 0-4.008 3.531l1.732 0.698a2.55 2.55 0 0 1 5.019.696 2.55 2.55 0 0 1-2.55 2.55 2.55 2.55 0 0 1-1.491-0.24z" />
  </svg>
);

export const Discord = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
    <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833 0-7.5-.5-1.5-1.5-4.5-2.5-5.5-1.457-1.457-3-1.5-5-1.5-1 0-4.5.5-6.5 1.5-1.5.5-3 1-4 2.5-.5 1.5-.5 3-.5 4.5s1 6 3.5 7.5c2.5 1.5 4.5 1 6.5-.5.5-.5 1-1 1-1.5" />
  </svg>
);

export const SteamGroup = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="9" cy="8" r="4" />
    <path d="M4 16.5C4 14.567 5.567 13 7.5 13H10.5C12.433 13 14 14.567 14 16.5" />
    <circle cx="15" cy="10" r="3" />
    <path d="M11 18C11 16.343 12.343 15 14 15H16C17.657 15 19 16.343 19 18" />
    <path d="M12 2a10 10 0 0 1 4.83 18.74" />
    <path d="M6.4 19.4A10 10 0 0 1 12 2" />
  </svg>
);

export const Cpu = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

export const CpuCooler = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12a3 3 0 0 0-3 3m3-3a3 3 0 0 1 3 3m-3-3v-2m0 2V6" />
    <path d="M15 12h2m-2 0h5m-16 0h1m-1 0h5" />
    <path d="M12 17v2m0-2v4" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

export const Monitor = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

export const Software = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);
