import GameSaving from "../GameSaving";
import GameSavingLoader from "../GameSavingLoader";

describe('GameSavingLoader', () => {
  describe('load', () => {
    it('should load and parse game saving data', async () => {
      const saving = await GameSavingLoader.load();

      expect(saving).toEqual(
        new GameSaving({
          id: 9,
          created: 1546300800,
          userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
          },
        })
      );
    });
  });
});