document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("code_input");
  const outputText = document.getElementById("output-text");
  const runButtonElement = document.getElementById("runButton");
  const clearButtonElement = document.getElementById("clearButton");
  // const saveButtonElement = document.getElementById("saveButton");

  runButtonElement.addEventListener("click", runButton);
  clearButtonElement.addEventListener("click", clearButton);
  // saveButtonElement.addEventListener("click", saveButton);

  function runButton() {
    const output = interpretBfCode(textArea.value);
    outputText.textContent = output;
  }

  function clearButton() {
    textArea.value = '';
    outputText.textContent = '';
  }

  // function saveButton() { }

  /**
   * Interprets Brainf**k code.
   * @param {string} code Brainf**k code.
   * @returns {string} Output.
   */
  function interpretBfCode(code) {
    const UPPER_LIMIT = 1_000_000;

    let data = [0];
    let pointer = 0;
    let loopstart = 0;
    let output = '';
    let i = 0;
    let j = 0;

    while (i < code.length && j < UPPER_LIMIT) {
      const char = code.charAt(i);
      switch (char) {
        case '>':
          pointer++;
          if (pointer >= data.length) data[pointer] = 0;
          break;

        case '<':
          if (pointer > 0) pointer--;
          break;

        case '+':
          data[pointer]++;
          break;

        case '-':
          data[pointer]--;
          break;

        case '.':
          output += String.fromCharCode(data[pointer]);
          break;

        case ',':
          while (true) {
            let input = prompt("Input:");

            if (/^[0-9]+$/.test(input)) {
              data[pointer] = parseInt(input);
              break;
            }
          }
          break;

        case '[':
          loopstart = i;
          break;

        case ']':
          if (data[pointer] != 0) i = loopstart;
          break;
      }

      i++;
      j++;
    }

    return output;
  }
});
