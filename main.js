class Cube {
  constructor() {
    this.faces = {
      U: Array(9).fill('w'),
      D: Array(9).fill('y'),
      F: Array(9).fill('r'),
      B: Array(9).fill('o'),
      L: Array(9).fill('g'),
      R: Array(9).fill('b'),
    };
  }

  getColorString() {
    return (
      this.faces.U.join('') +
      this.faces.R.join('') +
      this.faces.F.join('') +
      this.faces.D.join('') +
      this.faces.L.join('') +
      this.faces.B.join('')
    );
  }

  scramble() {
    const moves = ['U', 'D', 'F', 'B', 'L', 'R'];
    for (let i = 0; i < 20; i++) {
      const move = moves[Math.floor(Math.random() * moves.length)];
      console.log("Scramble Move:", move);
    }
  }

  solve() {
    alert("Solving... (mock implementation)");
    // Add solving steps here if needed
  }
}

const cube = new Cube();

function scrambleCube() {
  cube.scramble();
  displayCube();
}

function solveCube() {
  cube.solve();
  displayCube();
}

function displayCube() {
  const container = document.getElementById('cube-display');
  container.innerHTML = '';
  const colorMap = {
    r: 'red',
    g: 'green',
    b: 'blue',
    y: 'yellow',
    o: 'orange',
    w: 'white',
  };
  const colorStr = cube.getColorString();

  for (let i = 0; i < 54; i++) {
    const square = document.createElement('div');
    square.style.width = '30px';
    square.style.height = '30px';
    square.style.backgroundColor = colorMap[colorStr[i]];
    square.style.border = '1px solid #000';
    container.appendChild(square);
  }
}
