import { CardConfig } from '../components/Players/CardPicker/CardConfigs';
import { Status } from './status';

export interface Game {
  id: string;
  name: string;
  average: number;
  gameStatus: Status;
  gameType?: GameType | GameType.Fibonacci;
  isAllowMembersToManageSession?: boolean;
  cards: CardConfig[];
  createdBy: string;
  createdById: string;
  createdAt: Date;
  updatedAt?: Date;
  scoresDict?: Record<string, number>
}

export interface NewGame {
  name: string;
  gameType: string;
  cards: CardConfig[];
  isAllowMembersToManageSession?: boolean;
  createdBy: string;
  createdAt: Date;
}

export enum GameType {
  Fibonacci = 'Fibonacci',
  ShortFibonacci = 'ShortFibonacci',
  Custom = 'Custom',
}
