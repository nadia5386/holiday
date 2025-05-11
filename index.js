document.getElementById('shapes').addEventListener('change', function () {
  const selectedShape = this.value;
  const inputFields = document.getElementById('inputFields');
  inputFields.innerHTML = '';

  if (selectedShape === 'circle') {
    inputFields.innerHTML = '<label>Radius: <input type="number" id="radius"></label>';
  } else if (selectedShape === 'rectangle') {
    inputFields.innerHTML = '<label>Length: <input type="number" id="length"></label>' +
                            '<label>Width: <input type="number" id="width"></label>';
  } else if (selectedShape === 'square') {
    inputFields.innerHTML = '<label>Side: <input type="number" id="side"></label>';
  }
});
function calculate() {
  const shape = document.getElementById('shapes').value;
  let result = '';

  if (shape === 'circle') {
    const radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius)) return displayError();
    result = `Area of Circle: ${Math.PI * radius * radius}`;
  } else if (shape === 'rectangle') {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    if (isNaN(length) || isNaN(width)) return displayError();
    result = `Area of Rectangle: ${length * width}`;
  } else if (shape === 'square') {
    const side = parseFloat(document.getElementById('side').value);
    if (isNaN(side)) return displayError();
    result = `Area of Square: ${side * side}`;
  }

  displayResult(result);
}

function calculateVolume() {
  const shape = document.getElementById('shapes').value;
  let result = '';

  if (shape === 'circle') {
    const radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius)) return displayError();
    result = `Volume of Sphere: ${(4 / 3) * Math.PI * Math.pow(radius, 3)}`;
  } else if (shape === 'rectangle') {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(prompt("Enter the height of the rectangular prism:"));
    if (isNaN(length) || isNaN(width)) return displayError();
    result = `Volume of Rectangular Prism: ${length * width * height}`;
  } else if (shape === 'square') {
    const side = parseFloat(document.getElementById('side').value);
    const height = parseFloat(prompt("Enter the height of the cube:"));
    if (isNaN(side) || isNaN(height)) return displayError();
    result = `Volume of Cube: ${side * side * height}`;
  }

  displayResult(result);
}

function calculateRadius() {
  const shape = document.getElementById('shapes').value;
  let result = '';

  if (shape === 'circle') {
    const area = parseFloat(prompt("Enter the area of the circle:"));
    if (isNaN(area)) return displayError();
    result = `Radius of Circle: ${Math.sqrt(area / Math.PI)}`;
  } else {
    result = 'Radius calculation only applies to circles.';
  }

  displayResult(result);
}

function displayResult(text) {
  document.getElementById('result').innerText = text;
}

function displayError() {
  document.getElementById('result').innerText = 'Please enter valid numeric input.';
}
