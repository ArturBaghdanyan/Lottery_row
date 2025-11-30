import gameButton from "../assets/icons/gameButton.svg";
import type { gameType } from "../types/gameType";

export const gameData: gameType[] = [
  {
    id: 1,
    balance: 4000,
    button1: gameButton,
    button2: gameButton,
  },
  {
    id: 2,
    balance: 3500,
    button1: gameButton,
    button2: gameButton,
  },
  {
    id: 3,
    balance: 3000,
    button1: gameButton,
    button2: gameButton,
  },
  {
    id: 4,
    balance: 2500,
    button1: gameButton,
    button2: gameButton,
  },
  {
    id: 5,
    balance: 1500,
    button1: gameButton,
    button2: gameButton,
  },
  {
    id: 6,
    balance: 400,
    button1: gameButton,
    button2: gameButton,
    claim: 'claim'
  },
];
