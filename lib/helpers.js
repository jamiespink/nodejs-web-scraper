function matcher(matches, operators) {
    let matchedArray = [];
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        for (let j = 0; j < operators.length; j++) {
            const operatorMatches = operators[j];
            for (let k = 0; k < operatorMatches.length; k++) {
                const operatorMatch = operatorMatches[k];
                if (match.home === operatorMatch.home) {
                    let matchedObject = {
                        home: match.home,
                        away: match.away,
                        date: match.date,
                        time: match.time,
                        odds: []
                    }
                }
            }
        };
    }
    return operators[0];
}

export { matcher };
