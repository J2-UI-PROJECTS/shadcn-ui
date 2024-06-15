https://ui.shadcn.com/

1. Creacion del proyecto:
```
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

2. Init shadcn
```
npx shadcn-ui@latest init
```

3.  Import the font in the root layout:
```
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
<body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
```
4. Configure theme.extend.fontFamily in tailwind.config.js
```
const { fontFamily } = require("tailwindcss/defaultTheme")
theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
```
