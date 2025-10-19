#!/bin/bash

# Fix specific component imports
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-alert-dialog/g' src/components/ui/alert-dialog.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-aspect-ratio/g' src/components/ui/aspect-ratio.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-avatar/g' src/components/ui/avatar.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-checkbox/g' src/components/ui/checkbox.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-collapsible/g' src/components/ui/collapsible.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-context-menu/g' src/components/ui/context-menu.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-dialog/g' src/components/ui/dialog.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-dropdown-menu/g' src/components/ui/dropdown-menu.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-hover-card/g' src/components/ui/hover-card.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-label/g' src/components/ui/label.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-menubar/g' src/components/ui/menubar.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-navigation-menu/g' src/components/ui/navigation-menu.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-popover/g' src/components/ui/popover.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-progress/g' src/components/ui/progress.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-radio-group/g' src/components/ui/radio-group.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-scroll-area/g' src/components/ui/scroll-area.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-select/g' src/components/ui/select.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-separator/g' src/components/ui/separator.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slider/g' src/components/ui/slider.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-switch/g' src/components/ui/switch.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-tabs/g' src/components/ui/tabs.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-toggle/g' src/components/ui/toggle.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-toggle-group/g' src/components/ui/toggle-group.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-tooltip/g' src/components/ui/tooltip.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slot/g' src/components/ui/button.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slot/g' src/components/ui/badge.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slot/g' src/components/ui/breadcrumb.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slot/g' src/components/ui/form.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slot/g' src/components/ui/sidebar.tsx
sed -i '' 's/@radix-ui\/react-accordion/@radix-ui\/react-slot/g' src/components/ui/sheet.tsx

echo "Fixed all imports"
