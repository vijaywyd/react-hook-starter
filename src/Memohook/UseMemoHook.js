import React, {useState, useMemo} from "react";

let executionTimes = [];
let e1 = []

/**
India : 0.009999999747378752
America : 0.005000000328436727
Canda : 0
Thailand : 0
India : 293.0199999996148
America : 465.4449999998178
Canda : 282.8649999996742
Thailand : 279.14000000009764
 */

export function UseMemo() {

    const words = ["India", "America", "Canda", "Thailand"];
    
    const [wordIndex, setWordIndex] = useState(0);

    
    function calcLength() {
        for(let i = 0; i < 100000000; i++);

        const l = words[wordIndex].length;

        return l;

    }

    const memonizedWordLength = useMemo(calcLength, []);

    function handleNextClick() {
        setWordIndex(wordIndex + 1 === words.length ? 0 : wordIndex + 1 );
    }

    

    const currentTime = performance.now();
    const l = memonizedWordLength;
    executionTimes.push( words[wordIndex] + " : " + (performance.now() - currentTime));

    const ct = performance.now();
    calcLength();
    e1.push( words[wordIndex] + " : " + (performance.now() - ct));

    
    return (
        <>
        <button onClick = {handleNextClick}> Next Word </button>
            <p>{words[wordIndex]} Length :  {l}</p>
            <ul>
                {
                    executionTimes.map((executionTime, index) => <li key = {index}>{executionTime}</li>)
                }
                {
                        e1.map((e, index) => <li key = {index}>{e}</li>)
                }
            </ul>
        </>
    );
}