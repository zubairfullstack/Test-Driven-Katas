const wrap = (line, maxLen) => {

  if (line.length === 0) {
    return line;
  }

  if (line.length <= maxLen) {
    return line;
  }

  let source = line.split(" ");
  let currentLine = source[0];
  let result = "";

  for (let index = 1; index < source.length; index++) {

    let currentLineTest = currentLine + " " + source[index];

    if (currentLineTest.length > maxLen) {
      result = result + currentLine + "\n";
      currentLine = source[index];
    } else {
      currentLine = currentLineTest;
    }
  }
  result = result + currentLine;

  console.log(result);
  return result;
}

module.exports = wrap;

