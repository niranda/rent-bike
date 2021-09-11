import { CountUp } from './countUp.js';

window.addEventListener('load', () => {
    const countUp1 = new CountUp('counter-item-1', 823)
    const countUp2 = new CountUp('counter-item-2', 67)
    const countUp3 = new CountUp('counter-item-3', 18)
    const countUp4 = new CountUp('counter-item-4', 2309)
    countUp1.start()
    countUp2.start()
    countUp3.start()
    countUp4.start()
})