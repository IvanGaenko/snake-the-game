export interface Touch {
  isAble: boolean;
  start: { x: number; y: number };
  end: { x: number; y: number };
  timeout: number;
}
