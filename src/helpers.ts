import { BodyContent } from "./snake";

export const setSnakeHeadPosition = (
  snakeHead: BodyContent,
  direction: string,
  currentDirection: string
): [BodyContent, boolean] => {
  let directionShouldUpdate = false;

  if (
    (direction === "ArrowLeft" && currentDirection !== "ArrowRight") ||
    (direction === "ArrowRight" && currentDirection !== "ArrowLeft") ||
    (direction === "ArrowDown" && currentDirection !== "ArrowUp") ||
    (direction === "ArrowUp" && currentDirection !== "ArrowDown")
  ) {
    directionShouldUpdate = true;
  }

  switch (directionShouldUpdate ? direction : currentDirection) {
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

  return [snakeHead, directionShouldUpdate];
};
