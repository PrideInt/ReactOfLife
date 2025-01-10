import './App.css'

import { use, useEffect } from 'react';
import { useState } from 'react'

const initCanvas = () => {
  const canvas = document.getElementById('life');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';

  for (let i = 0; i < canvas.width; i += 10) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
  for (let i = 0; i < canvas.height; i += 10) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
  requestAnimationFrame(initCanvas);
}

function App() {
  const [count, setCount] = useState(0);
  const [conway, setConway] = useState(undefined);

  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;

  // Create canvas with grid lines
  useEffect(() => {
    const canvas = document.getElementById('life');
    const ctx = canvas.getContext('2d');

    requestAnimationFrame(initCanvas);

    const resize = () => {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    setConway(ctx);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return (
    <div>
      <canvas id="life"></canvas>
      {
        /*
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        */
      }
    </div>
  )
}

export default App
