function matcher(matches, operators) {
  let matchedArray = [];
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    let matchObject = {
      home: match.home,
      away: match.away,
      date: match.date,
      time: match.time,
      operators: [],
    };
    for (let j = 0; j < operators.length; j++) {
      const operatorMatches = operators[j];
      let foundMatch = false;
      for (let k = 0; k < operatorMatches.length; k++) {
        const operatorMatch = operatorMatches[k];
        if (match.home === operatorMatch.home) {
          const operatorObject = {
            name: operatorMatch.operator,
            odds: operatorMatch.odds
          };
          matchObject.operators.push(operatorObject);
          foundMatch = true;
        }
      }
      if (foundMatch === false) {
        matchObject.operators.push({});
      }
    }
    matchedArray.push(matchObject);
  }
  return matchedArray;
}

export { matcher };
