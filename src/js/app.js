export function healthHero (hero) {
    let result = "";
      if (hero.health > 50) {
        result = "healthy";
      }
      else if (hero.health < 15) {
        result = "critical";
      }
      else {
        result = "wounded";
      }
      return result;
}
