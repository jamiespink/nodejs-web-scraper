function matcher(matches, operators) {
  let matchedArray = [];
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    let matchObject = {
      home: match.home,
      away: match.away,
      date: match.date,
      time: match.time,
      operators: [
        {
          name: "sportingbet",
          odds: { home: "1/7", draw: "1/5", away: "2/10" },
        },
      ],
    };
    for (let j = 0; j < operators.length; j++) {
      const operatorMatches = operators[j];
      for (let k = 0; k < operatorMatches.length; k++) {
        const operatorMatch = operatorMatches[k];
        if (match.home === operatorMatch.home) {
          let operatorObject = {
            name: operatorMatch.operator,
          };
        }
      }
    }
  }
  return operators[0];
}

export { matcher };
