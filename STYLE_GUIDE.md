# E-Sampah Style Guide

## Design Philosophy
Modern, minimalist e-commerce with eco-friendly sustainability focus. Inspired by Amazon, Etsy, Tokopedia, and IKEA.

## Color Palette

### Primary Colors
- **Forest Green** (#047857) - Primary brand color, buttons, links
- **Sage** (#10B981) - Eco badges, accents
- **Warm Gray** (#78716C) - Text and neutral elements
- **Cream** (#FAFAF9) - Background color

### Color Usage
```css
forest-600: #047857  /* Primary buttons, links */
forest-700: #15803d  /* Hover states */
sage-500: #10B981    /* Eco badges */
warm-gray-900: #1c1917  /* Headers */
warm-gray-700: #44403c  /* Body text */
warm-gray-400: #a8a29e  /* Secondary text */
warm-gray-200: #e7e5e4  /* Borders */
cream: #FAFAF9       /* Page background */
```

## Typography

### Font Families
- **Space Grotesk** - Headlines, product prices, bold statements
- **Inter** - Body text, forms, navigation

### Usage
```jsx
// Headlines
<h1 className="font-space text-3xl font-bold text-warm-gray-900">

// Body text
<p className="font-inter text-sm text-warm-gray-700">

// Buttons
<button className="font-inter text-sm font-medium">
```

## Component Patterns

### Buttons
```jsx
// Primary Button
<button className="font-inter bg-forest-600 hover:bg-forest-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">

// Secondary Button (text only)
<a className="font-inter text-forest-600 hover:text-forest-700 font-medium">
```

### Cards
```jsx
// Product Card
<div className="bg-white rounded-lg border border-warm-gray-200 hover:border-forest-600 transition-all">

// Content Card
<div className="bg-white rounded-lg border border-warm-gray-200 p-4">
```

### Form Inputs
```jsx
<input className="font-inter w-full border border-warm-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-forest-600 focus:ring-1 focus:ring-forest-600 transition-all" />
```

### Eco Badge
```jsx
<div className="bg-sage-500 text-white text-xs font-medium px-2 py-1 rounded">
  ♻️
</div>
```

## Spacing System

### Container Padding
- Desktop: `px-6` (24px)
- Max width: `max-w-7xl` (1280px)

### Section Spacing
- Between sections: `py-8` (32px)
- Card padding: `p-4` (16px) to `p-10` (40px)
- Grid gaps: `gap-5` (20px)

### Text Spacing
- Heading margin: `mb-6` (24px)
- Paragraph spacing: `mb-4` (16px)
- Form field spacing: `space-y-5` (20px)

## Layout Patterns

### Product Grid
```jsx
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
```

### Two-Column Layout (Product Detail)
```jsx
<div className="grid md:grid-cols-2 gap-12">
```

### Navigation
- Sticky navbar: `sticky top-0 z-50`
- Border bottom: `border-b border-warm-gray-200`

## Interactive States

### Hover Effects
- Buttons: Color change only (no transform)
- Cards: Border color change
- Links: Color shift to forest-700
- Images: Subtle opacity change (opacity-90)

### Focus States
- Inputs: `focus:border-forest-600 focus:ring-1 focus:ring-forest-600`

### Loading States
```jsx
<div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-warm-gray-200 border-t-forest-600"></div>
```

## Design Principles

1. **Minimalism** - Clean layouts, ample whitespace, no unnecessary decorations
2. **Clarity** - Clear hierarchy, readable typography, obvious interactive elements
3. **Consistency** - Same patterns throughout (buttons, cards, spacing)
4. **Eco-Focus** - Subtle green accents, eco badges, sustainability messaging
5. **Accessibility** - Good contrast ratios, clear focus states, semantic HTML
6. **Performance** - Simple animations (color transitions only), no heavy effects

## Tone & Voice

- **Professional** yet approachable
- **Eco-conscious** without being preachy
- **Clean** and straightforward
- **Trustworthy** and transparent

## Animation Guidelines

- Use `transition-colors` for color changes
- Use `transition-all` sparingly
- Duration: 200ms for most transitions
- No bounce, scale, or transform effects (minimal aesthetic)
- Loading spinners: Simple border-spin animation

## Page Backgrounds

- Main pages: `bg-cream` (#FAFAF9)
- Cards/modals: `bg-white`
- Footer: `bg-warm-gray-900`

## Border Styles

- Default: `border-warm-gray-200`
- Hover: `border-forest-600`
- Radius: `rounded-lg` (8px) for most elements

## Success Implementation Checklist

✅ Custom color palette (Forest, Sage, Warm Gray, Cream)
✅ Typography system (Space Grotesk + Inter)
✅ Modern navbar with minimal design
✅ Product grid with clean cards
✅ Product detail page with elegant layout
✅ Clean login/register forms
✅ Professional footer
✅ Consistent spacing system
✅ Hover states without excessive animation
✅ Eco-friendly visual identity
