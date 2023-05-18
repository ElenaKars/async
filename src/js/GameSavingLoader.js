import json from "./parser";
import read from "./reader";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
    static load(){
        return new Promise((resolve, reject) => {
          read()
            .then((data) => json(data))
            .then((parsedData) => resolve (new GameSaving(JSON.parse(parsedData))))
            .then((error) => reject(error))
        });

    }
  }