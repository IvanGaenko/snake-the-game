interface BodyContent {
 x: number;
 y: number;
}

type Body = BodyContent[];
  
 const defaultBody = [
      { x: 7, y: 0 },
      { x: 6, y: 0 },
    ];

class Snake {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;

  blockWidth: number;

  body: Body;

  constructor(blockWidth: number, body: Body = defaultBody) {
    this.canvas = document.querySelector("#snake") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");

    this.blockWidth = blockWidth;
   this.body = body;
  }

  move() {
    this.body = this.body.map(b => {
      b.x++;
      return b;
    });
  }

  render() {
    if (this.context !== null && this.canvas !== null) {
      this.context.clearRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight);
      for (let i = 0; i < this.body.length; i++) {
        this.context.fillStyle = i === 0 ? "yellow" : "blue";
        this.context.fillRect(
          this.body[i].x * this.blockWidth,
          this.body[i].y * this.blockWidth,
          this.blockWidth,
          this.blockWidth
        );
      }
    }
  }
}

export default Snake;
