describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.roll(3);
  })

  describe('#roll', function() {
    it('registers a roll', function() {
      expect(game.gameRolls[0]).toEqual(3);
    });

    it('adds a frame', function() {
      expect(game.frames.length).toEqual(1);
    });
  });
});
