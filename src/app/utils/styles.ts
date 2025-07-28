// Global styles for the application. I implemented this to maintain consistency across the app and to avoid repetition of styles in components.
export const styles = {
  // Layout Patterns
  container: 'max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 ',

  // Flex layout
  flexRow: 'flex items-center space-x-4',
  flexColumn: 'flex flex-col space-y-12',
  flexBetween: 'flex items-center justify-between',
  flexCenter: 'flex items-center justify-center',
  flexStart: 'flex items-start',
  flexEnd: 'flex items-end justify-end',

  //Colors
  bgPrimary: 'bg-[#1d428a]',
  bgSecondary: 'bg-[#ecb840]',

  //Border colors
  borderPrimary: 'border-[#1d428a]',
  borderSecondary: 'border-[#ecb840]',

  //Text color
  textPrimary: 'text-[#1d428a]',
  textSecondary: 'text-[#ecb840]',

  // Paddings
  paddingBtwSection: 'pt-8',

  // Margins
  marginBtwContent: 'mt-8',

  // Text Patterns
  navBarText: 'font-bold md:text-xl text-lg ',
  navBarSubText: 'text-white/80 text-xs',
  heroTitle: 'text-4xl md:text-6xl font-bold leading-tight',
  contentText: 'md:text-xl text-lg  leading-relaxed',
  sectionTitleText: 'md:text-4xl text-3xl font-bold',

  // Navigation Patterns
  navHeight: 'h-16',
  navTab: 'py-4 px-2 border-b-2 transition-colors',

  // Animation Patterns
  animationScroll: 'transition-all duration-700',
  slideDown: 'opacity-0 translate-y-8',
  slideUp: 'opacity-100 translate-y-0',
  slideLeft: 'opacity-100 translate-x-0',
  slideRight: 'opacity-0 translate-x-8',
  buttonHover: 'transition-all duration-300 hover:scale-105',
};
