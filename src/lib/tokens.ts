// FORMA Design System — TypeScript Tokens
// Mirrors tokens.css for use in JS logic if needed

export const tokens = {
    colors: {
        white: '#FAFAF8',
        ivory: '#F2EFE9',
        beigeLight: '#E8E2D9',
        beige: '#D4CAB8',
        stone: '#A89F8C',
        grayLight: '#E5E4E2',
        grayDark: '#5A5753',
        charcoal: '#2C2B28',
        black: '#1A1917',
        accent: '#B8956A',
        accentWarm: '#C9A87A',
        accentDark: '#8A6B46',
    },
    spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.5rem',
        6: '2rem',
        7: '3rem',
        8: '4rem',
        9: '6rem',
    },
    radius: {
        sm: '0.25rem',
        md: '0.625rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
    },
} as const
