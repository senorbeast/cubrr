function parser(input) {
    //Validation " ' ' , " '"
    //!if invalid show the Error toast
    //Button for validate text

    var scra = "UDRLFBudrlfb'2ESM ";
    var parse_scra = input;
    var flag = 0;
    for (var i = 0; i < input.length; i++) {
        console.log(input.length, i, "Length");
        if (scra.search(String(input.slice(i))) === -1) {
            console.log("Invalid", input.slice(i));
            var char = input.slice(i);
            var op = input.replace(char, "");
        }
    }

    return op;
}
export { parser };
