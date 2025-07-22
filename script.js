function convert() {
    const value = parseFloat(document.getElementById("inputValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(value)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    if (from === to) {
      result = value;
    } else if (from === "meters" && to === "feet") {
      result = value * 3.28084;
    } else if (from === "feet" && to === "meters") {
      result = value / 3.28084;
    }
  
    resultElement.textContent = `${value} ${from} = ${result.toFixed(4)} ${to}`;
  }
  