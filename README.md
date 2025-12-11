# I Saras – AI UPSC Mentor App  
**Landing Page built using React + Vite + Tailwind CSS**

This project is a fully responsive, pixel-perfect conversion of the official **I Saras HTML landing page** into a modern React application.  
All sections such as Navbar, Hero, Features, Pricing, FAQ, Footer, and Contact form are implemented exactly as in the original HTML design.

---

## Live Demo  
**https://isaras-landing-react.vercel.app/**  
*(Replace with your actual deployed link)*

## GitHub Repository  
**https://github.com/your-username/isaras-landing-react**  
*(Replace with your actual repo link)*

---

## Tech Stack

- **React (Vite)**
- **TypeScript**
- **Tailwind CSS**
- **CSS Components (from original I Saras HTML design)**
- **Responsive UI (mobile, tablet, desktop)**
- **Dark/Light Mode Support**
- **React Hooks (useState, useEffect)**

---

## Folder Structure
```
isaras-landing-react/
├── public/
│   ├── img-isaras/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── CTASection.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useDarkMode.ts    
│   │   ├── useScrollLock.ts  
│   │           
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
└── README.md


##  Installation & Setup

###  Clone the repository
```bash
git clone https://github.com/noorafshan-1/isaras-landing-react.git
cd isaras-landing-react
```

###  Install dependencies
```bash
npm install
```

###  Start the development server
```bash
npm run dev
```

###  Build for production
```bash
npm run build
```

---

##  Design Approach & Decisions

### **Pixel-perfect matching**
The React components were rebuilt directly from the original HTML landing page to ensure the layout, colors, animations, and spacing match the official design.

### **Componentization**
Large HTML sections were split into reusable components:
- Header  
- Mobile Sidebar  
- CTA Section  
- Footer  
- Hero  
- Pricing  
- FAQ  

### **Mobile-first responsiveness**
All breakpoints carefully follow the original design:
- Mobile (≤640px)
- Tablet (641–1024px)
- Desktop (1025–1440px)

### **Modern React practices** 
- Functional components  
- Tailwind utility classes  
- No unnecessary libraries  
- Clean state management  

---

##  Challenges & How They Were Solved

###  **Navbar/sign-in button alignment**
The HTML layout used complex absolute centering.  
Solved using:
- `left-1/2 -translate-x-1/2`
- `flex justify-between`
- Proper spacing and container widths

### **Mobile sidebar sliding from the right**
Initially sliding from left.  
Fixed using:
- `right-0`
- `translate-x-full → translate-x-0`
- `transition-transform`

### **Vite React refresh preamble error**
This happened due to additions in `index.html`.  
Solved by restoring required Vite scripts and preamble.

### **Matching design exactly**
Spacing, font sizes, shadows, gradient colors were carefully matched using Tailwind’s custom classes.

---

## Credits

**Created by Noorafshan Jawaid**  
React Developer — Landing Page Conversion

Original UI/UX design belongs to **I Saras**.

---

##  Contact
If you want help improving or extending this project:  
*Feel free to reach out anytime!*

