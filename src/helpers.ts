import { BodyContent } from "./Snake";
import { Touch } from "./types";

export const setSnakeHeadPosition = (
  snakeHead: BodyContent,
  direction: string
): BodyContent => {
  switch (direction) {
    case "ArrowUp": {
      snakeHead = { ...snakeHead, y: snakeHead.y - 1 };
      break;
    }
    case "ArrowDown": {
      snakeHead = { ...snakeHead, y: snakeHead.y + 1 };
      break;
    }
    case "ArrowLeft": {
      snakeHead = { ...snakeHead, x: snakeHead.x - 1 };
      break;
    }
    case "ArrowRight": {
      snakeHead = { ...snakeHead, x: snakeHead.x + 1 };
      break;
    }
  }

  return snakeHead;
};

export const debounce = (fn: (e: Event) => void) => {
  let timer: number;
  return (e: Event) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, 500, e);
  };
};

export const getSwipeDirection = (touch: Touch): string => {
  const deltaX = touch.end.x - touch.start.x;
  const deltaY = touch.end.y - touch.start.y;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) {
      return "ArrowLeft";
    } else {
      return "ArrowRight";
    }
  } else {
    if (deltaY < 0) {
      return "ArrowUp";
    } else {
      return "ArrowDown";
    }
  }
};
