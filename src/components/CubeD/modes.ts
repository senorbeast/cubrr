interface ModeTypes {
    none: string;
    alg: string;
    cubecols: number;
    nobuts: number;
}
// interface Modes {
//     fullM: ModeTypes;
//     scraM: ModeTypes;
//     algM: ModeTypes;
// }
// const modes: Modes = {
//     fullM: {
//         none: "none",
//         alg: "none",
//         cubecols: 3,
//         nobuts: 11,
//     },
//     scraM: {
//         none: "grid",
//         alg: "none",
//         cubecols: 2,
//         nobuts: 7,
//     },

//     algM: {
//         none: "none",
//         alg: "grid",
//         cubecols: 2,
//         nobuts: 7,
//     },
// };
// export default modes;
// export const fullM = {
//     none: "none",
//     alg: "none",
//     cubecols: 3,
//     nobuts: 11,
// };
// export const scraM = {
//     none: "grid",
//     alg: "none",
//     cubecols: 2,
//     nobuts: 7,
// };

// export const algM = {
//     none: "none",
//     alg: "grid",
//     cubecols: 2,
//     nobuts: 7,
// };

const fullM = {
    none: 'none',
    alg: 'none',
    cubecols: 3,
    nobuts: 11,
};
const scraM = {
    none: 'grid',
    alg: 'none',
    cubecols: 2,
    nobuts: 7,
};

const algM = {
    none: 'none',
    alg: 'grid',
    cubecols: 2,
    nobuts: 7,
};

const selMode = (mode: string): ModeTypes => {
    if (mode === 'fullM') {
        return fullM;
    }
    if (mode === 'algM') {
        return algM;
    }
    if (mode === 'scraM') {
        return scraM;
    }
    return scraM;
};
export default selMode;
