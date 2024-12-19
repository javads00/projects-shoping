import SportsBackground from "./sports-background.jpg";
import NotFound from "./not-found.jpg";
import Sport2 from "./sport-2.jpg";
import SportRunning from "./sport-running.jpg";
import SportsClass from "./sportsclass.jpg";
import NotFoundAnimate from "./not-found-animation.gif";

export const localImages = {
  SportsBackground,
  NotFound,
  Sport2,
  SportRunning,
  SportsClass,
  NotFoundAnimate,
};

export type ImagesType = keyof typeof localImages;
