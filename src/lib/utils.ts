import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { extendedTheme } from './extended-theme.ts';

// This function formats the colors from the extended theme into a format that can be used by Tailwind CSS
function formatColors() {
  const colors = [];
  for (const [key, color] of Object.entries(extendedTheme.colors)) {
    if (typeof color === 'string') {
      colors.push(key);
    } else {
      const colorGroup = Object.keys(color).map((subKey) =>
        subKey === 'DEFAULT' ? '' : subKey,
      );
      colors.push({ [key]: colorGroup });
    }
  }
  return colors;
}

// This object extends the default Tailwind CSS configuration with custom values from the extended theme
const customTwMerge = extendTailwindMerge({
  theme: {
    colors: formatColors(),
    borderRadius: Object.keys(extendedTheme.borderRadius),
  },
  classGroups: {
    'font-size': [
      {
        text: Object.keys(extendedTheme.fontSize),
      },
    ],
    animate: [
      {
        animate: Object.keys(extendedTheme.animation),
      },
    ],
  },
});

// This function takes a list of class values and returns a string of class names, using the custom Tailwind CSS configuration
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
