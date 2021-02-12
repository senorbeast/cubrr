// const GlobalStyle = createGlobalStyle` //not using now
//     body{
//         background-color:none;
//     }`;
interface Theme {
    primary: string;
    priopp: string;
    secondary: string;
    secopp: string;
    highlight: string;
    highopp: string;
    prialt: string;
    secalt: string;
    mprim: string;
}
export const lightT: Theme = {
    primary: "#fff",
    priopp: "#000",
    secondary: "#D9D9D9",
    secopp: "#4d4d4d",
    highlight: "#171764",
    highopp: "#f5b82e",
    prialt: "#fbe274",
    secalt: "#6cd99b",
    mprim: "#fff",
};
export const darkT: Theme = {
    primary: "#272727",
    priopp: "#fff",
    secondary: "#4d4d4d",
    secopp: "#D9D9D9",
    highlight: "#f5b82e",
    highopp: "#171764",
    prialt: "#232d33",
    secalt: "#0d151a ",
    mprim: "#424242",
};
