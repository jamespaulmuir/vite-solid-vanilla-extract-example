import { keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const App = style({
    textAlign: 'center'
});

const logoSpin = keyframes({
    'from': { rotate: '0deg' },
    'to': { rotate: '360deg' },
});


export const logo = style({
    animation: `infinite 20s linear ${logoSpin}`,
    height: '40vmin',
    pointerEvents: 'none'
})

export const header = style({
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: calc.add('10px', '2vmin'),
    color: 'white'
})

export const link = style({
    color: '#b318f0'
})
