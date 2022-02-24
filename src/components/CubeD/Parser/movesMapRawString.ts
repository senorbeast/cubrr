import getAlgs from './getAlgs';
import validateAlgs from './validateAlg';
/**
 * Maps move number to raw string location for highlighting
 * and clicking to take the cube state to that move
 * 
 */
const movesMapRawString=(raw_input: string):any=>{
    let raw_size  = raw_input.length;
    //? We can auto format Solution to have proper spacing( but calc . position will case prob) 
    // TODO ^^^ Future Feature
    // Mapping Raw string of Text Area to Moves
    // If input if r U' L2
    // Output 
    // mapp = {"r": [0,1], "U'": [1,3], "L2": [3,5]}
    // or [ [1,[0,1]],[2,[1,3]], [3,[3,5]] ]
    // mapp[MoveNum - 1] = {"r": [0,1]}

    // Get Validalg array , getAlgCmtNum->non adjusted, getComment- find length of each comment
    // single letter move notation will have range of 1 
    // double letter moves like U2 L' will have range 2
    // Add offset due to each comment.length at non adjusted get Algcmtnum
    // Add offset due to intermediate spaces and . 
    
    //# this is better (universal)
    // Take Validalg array, and raw string, 
    let valgArr = validateAlgs(getAlgs(raw_input)).legalAlg;
    
    //match the 1st move to raw string get the location and range,
    let rStr = raw_input;
    //@ts-ignore
    function getCords(move: string): any[]{
        var moveRE = new RegExp( move, 'i' ) || '';
        let cord = [];
        let sm = rStr.match(moveRE)  
        //@ts-ignore
        let fc = sm.index//@ts-ignore
        let ec = sm.length + 1
        cord.push(fc); 
        cord.push(ec);
        console.log('rep', rStr)
        //@ts-ignore
        console.log({offset})
        return cord
    }

    let cordList = []; // to store areas of circles
    let cords = [];
    for (let i = 0; i < valgArr.length; i++) {
        cords = getCords(valgArr[i])
        cordList.push(cords);
    }
    console.log(cordList);
    
    // remove it from the raw string copy, add offset to next move due to removal of earlier move and repeat
    // if string starts with ' //' or '//' in remove comment and add its offset and continue ( regex at parsers, solution.tsx )

    // Test heavily by highlighting it or, check if last move ending char num = raw_string.length
    // Since we will take 1st instance no need for multiline or global in REGEX

    // Finds starting and ending positions of quoted text
    // in double or single quotes with escape char support like \" \'
    // var str = "this is a \"quoted\" string as you can 'read'";

    // var patt = /'((?:\\.|[^'])*)'|"((?:\\.|[^"])*)"/igm;

    // while (match = patt.exec(str)) {
    //   console.log(match.index + ' ' + patt.lastIndex);
    // }

    // Make the mapp
    return raw_size
}
 
export default movesMapRawString;


// Syntax highlighting with pre and code, lang: ASCIIDOC, cos, dart, gradle
// Overlap text area and pre and code area, and make text area text invisible

