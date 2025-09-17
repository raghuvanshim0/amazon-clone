# Amazon Clone - Product Requirements Document

Create a faithful recreation of Amazon's homepage interface with focus on visual fidelity and responsive design.

**Experience Qualities**:
1. **Familiar** - Users should immediately recognize the Amazon interface pattern and feel comfortable navigating
2. **Dense** - Information-rich layout that maximizes product discovery without feeling overwhelming  
3. **Commercial** - Professional e-commerce aesthetic that builds trust and encourages purchasing

**Complexity Level**: Light Application (multiple features with basic state)
- Recreates Amazon's visual interface with interactive elements but focuses on UI fidelity over full e-commerce functionality

## Essential Features

**Header Navigation**
- Functionality: Complete top navigation with logo, location selector, search bar, account menu, and cart
- Purpose: Primary navigation and brand recognition matching Amazon's exact layout
- Trigger: Page load displays header, user interactions show dropdowns and highlight states
- Progression: Load header → Display search/navigation → Show interactive states on hover/click
- Success criteria: Visually identical to Amazon header with working search interface

**Hero Banner Carousel**  
- Functionality: Large promotional banner with festival/sale content and navigation arrows
- Purpose: Showcase major promotions and seasonal campaigns to drive engagement
- Trigger: Automatic rotation with manual navigation controls
- Progression: Display banner → Auto-advance slides → Manual controls override → Loop content
- Success criteria: Smooth transitions with festival theme matching screenshot exactly

**Product Category Grid**
- Functionality: Grid layout showing product categories with images and pricing
- Purpose: Enable quick product discovery across different departments
- Trigger: Immediate display on page load with hover effects
- Progression: Load grid → Display categories → Show hover states → Enable category navigation
- Success criteria: Exact recreation of the 4-column category layout with proper spacing

**Secondary Navigation**
- Functionality: Horizontal menu bar with department links and Prime branding
- Purpose: Provide access to all major Amazon departments and services
- Trigger: Always visible below main header
- Progression: Display menu → Show hover effects → Enable department navigation
- Success criteria: Complete department list matching Amazon's current navigation

## Edge Case Handling
- **Mobile Responsiveness**: Collapse navigation to hamburger menu, stack category cards vertically
- **Long Product Names**: Truncate with ellipsis, show full name on hover
- **Missing Images**: Display placeholder with category icon
- **Slow Loading**: Show skeleton loaders for category cards and banner content

## Design Direction
The design should feel authoritative, trustworthy, and densely packed with information while maintaining Amazon's signature orange accent color and clean typography hierarchy.

## Color Selection
**Custom palette** - Recreating Amazon's exact brand colors for authentic visual experience

- **Primary Color**: Amazon Orange (#FF9900) - Used for CTAs, Prime branding, and interactive elements
- **Secondary Colors**: Deep Navy (#232F3E) for header, Light Gray (#F3F3F3) for backgrounds  
- **Accent Color**: Amazon Orange (#FF9900) for buttons, links, and promotional elements
- **Foreground/Background Pairings**: 
  - Header Navy (#232F3E): White text (#FFFFFF) - Ratio 12.6:1 ✓
  - Orange Primary (#FF9900): White text (#FFFFFF) - Ratio 4.5:1 ✓  
  - Light Background (#F3F3F3): Dark Gray text (#0F1111) - Ratio 15.3:1 ✓
  - Card White (#FFFFFF): Dark Gray text (#0F1111) - Ratio 21:1 ✓

## Font Selection
Typography should convey trust and readability with Amazon's characteristic sans-serif styling for optimal product browsing experience.

- **Typographic Hierarchy**:
  - H1 (Amazon Logo): Amazon Ember Bold/24px/normal spacing
  - H2 (Category Headers): Amazon Ember Medium/18px/tight spacing  
  - H3 (Product Titles): Amazon Ember Regular/14px/normal spacing
  - Body (Navigation): Amazon Ember Regular/13px/normal spacing
  - Small (Prices): Amazon Ember Regular/12px/tight spacing

## Animations
Subtle micro-interactions enhance usability without drawing attention away from product discovery - hover states, smooth transitions, and gentle carousel movement.

- **Purposeful Meaning**: Hover effects communicate interactivity, carousel movement shows content progression
- **Hierarchy of Movement**: Category cards get subtle lift on hover, navigation items highlight, carousel transitions smoothly

## Component Selection
- **Components**: Card for product categories, Button for CTAs, Input for search, Badge for Prime/deals, Carousel for hero banner
- **Customizations**: Amazon-specific header layout, custom grid system for category cards, branded color scheme
- **States**: Hover effects on all interactive elements, active states for navigation, loading states for dynamic content
- **Icon Selection**: Search, location pin, cart, menu hamburger, carousel arrows from Phosphor icons
- **Spacing**: Tight spacing for dense information layout - 8px base unit, 16px for card gaps, 24px for section spacing
- **Mobile**: Header collapses to hamburger menu, category grid becomes single column, search bar expands on focus