document.addEventListener("input", function (event) {
  if (event.target.tagName.toLowerCase() === "textarea") {
    autoGrow(event.target);
  }
});

function autoGrow(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
}

function generateDNASequence(inputSequence) {
  const replacements = {
    A: "A",
    C: "C",
    G: "G",
    T: "T",
    U: "T",
    R: "AG",
    Y: "CT",
    K: "GT",
    M: "AC",
    S: "GC",
    W: "AT",
    B: "GTC",
    D: "GAT",
    H: "ACT",
    V: "GCA",
    N: "AGCT",
  };

  let result = "";
  for (let char of inputSequence.toUpperCase()) {
    if (replacements[char]) {
      const possibleValues = replacements[char];
      const randomIndex = Math.floor(Math.random() * possibleValues.length);
      result += possibleValues[randomIndex];
    }
  }
  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");
  const resultDiv = document.getElementById("result");

  generateBtn.addEventListener("click", function () {
    const inputSequence = document.querySelector(
      'textarea[placeholder="Enter the sequence"]',
    ).value;

    const sequence = generateDNASequence(inputSequence);
    resultDiv.innerHTML = `<p>${sequence}</p>`;
  });
});
