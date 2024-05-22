import { GameType } from '../../../types/game';

export interface CardConfig {
  value: number;
  displayValue: string;
  color: string;
}
export const fibonacciCards: CardConfig[] = [
  { value: 0, displayValue: '0', color: 'var(--color-background-secondary)' },
  { value: 1, displayValue: '1', color: '#9EC8FE' },
  { value: 2, displayValue: '2', color: '#9EC8FE' },
  { value: 3, displayValue: '3', color: '#A3DFF2' },
  { value: 5, displayValue: '5', color: '#A3DFF2' },
  { value: 8, displayValue: '8', color: '#9DD49A' },
  { value: 13, displayValue: '13', color: '#9DD49A' },
  { value: 21, displayValue: '21', color: '#F4DD94' },
  { value: 34, displayValue: '34', color: '#F4DD94' },
  { value: 55, displayValue: '55', color: '#F39893' },
  { value: 89, displayValue: '89', color: '#F39893' },
  { value: -2, displayValue: '❓', color: 'var(--color-background-secondary)' },
];

export const shortFibonacciCards: CardConfig[] = [
  { value: 0, displayValue: '0', color: 'var(--color-background-secondary)' },
  { value: 0.5, displayValue: '½', color: '#9EC8FE' },
  { value: 1, displayValue: '1', color: '#9EC8FE' },
  { value: 2, displayValue: '2', color: '#9EC8FE' },
  { value: 3, displayValue: '3', color: '#A3DFF2' },
  { value: 5, displayValue: '5', color: '#A3DFF2' },
  { value: 8, displayValue: '8', color: '#9DD49A' },
  { value: 13, displayValue: '13', color: '#9DD49A' },
  { value: 21, displayValue: '20', color: '#F4DD94' },
  { value: 34, displayValue: '40', color: '#F4DD94' },
  { value: 55, displayValue: '100', color: '#F39893' },
  { value: -2, displayValue: '❓', color: 'var(--color-background-secondary)' },
];

export const getCards = (gameType: GameType | undefined): CardConfig[] => {
  switch (gameType) {
    case GameType.Fibonacci:
      return fibonacciCards;
    case GameType.ShortFibonacci:
      return shortFibonacciCards;
    default:
      return fibonacciCards;
  }
};

export const getRandomEmoji = () => {
  const emojis = [
    '☕',
    '🥤',
    '🍹',
    '🍸',
    '🍧',
    '🍨',
    '🍩',
    '🍎',
    '🧁',
    '🍪',
    '🍿',
    '🌮',
    '🍦',
    '🍉',
    '🍐',
    '🍰',
    '🍫',
  ];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export const getCustomCards = (values: string[]) => {
  const customCards: CardConfig[] = [
    { value: Number(values[0]), displayValue: values[0], color: 'var(--color-background-secondary)' },
    { value: Number(values[1]), displayValue: values[1], color: '#9EC8FE' },
    { value: Number(values[2]), displayValue: values[2], color: '#9EC8FE' },
    { value: Number(values[3]), displayValue: values[3], color: '#A3DFF2' },
    { value: Number(values[4]), displayValue: values[4], color: '#A3DFF2' },
    { value: Number(values[5]), displayValue: values[5], color: '#9DD49A' },
    { value: Number(values[6]), displayValue: values[6], color: '#9DD49A' },
    { value: Number(values[7]), displayValue: values[7], color: '#F4DD94' },
    { value: Number(values[8]), displayValue: values[8], color: '#F4DD94' },
    { value: Number(values[9]), displayValue: values[9], color: '#F39893' },
    { value:  Number(values[0]), displayValue: '❓', color: 'var(--color-background-secondary)' },
  ];
  return customCards.filter(
    (card) => card.displayValue !== undefined && card.displayValue.trim() !== '',
  );
};
