import { character } from '../index'; 

test('sort characters name level', () => {
    const char = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(character(char, ['name', 'level'])).toEqual(result);
  });
  
  test('sort characters', () => {
    const char = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
    ];
    expect(character(char, ['level', 'defence', 'name'])).toEqual(result);
  });
  
  test('sort characters max/min', () => {
    const char = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];
    expect(character(char)).toEqual(result);
  });