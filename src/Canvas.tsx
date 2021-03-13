export type CanvasElement {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const Canvas = () => {
  const [points, setPoints] = useState([]);

  const canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
  }

  return (
    <canvas id="myCanvas" width="200" height="200"/>
  );
}
