class Player {
  constructor(name, points, selection) {
    this.name = name;
    this.points = points;
    this.selection = selection;
  }
}

export class Human extends Player {
  constructor(name, points, selection) {
    super(name, points, selection);
  }
}

export class Robot extends Player {
  constructor(name, points, selection) {
    super(name, points, selection);
  }
  botSelection() {
    const rockPaperScissors = ["r", "p", "s"];
    const select = Math.floor(Math.random() * 3);
    const botSelection = rockPaperScissors[select];
    return botSelection;
  }
}
