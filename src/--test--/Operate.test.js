import operate from '../logic/operate';

it('adds two numbers correctly', () => {
  const result = operate('2', '3', '+');
  expect(result).toBe('5');
});

it('subtracts two numbers correctly', () => {
  const result = operate('5', '3', '-');
  expect(result).toBe('2');
});

it('multiplies two numbers correctly', () => {
  const result = operate('2', '3', 'x');
  expect(result).toBe('6');
});

it('divides two numbers correctly', () => {
  const result = operate('6', '3', '÷');
  expect(result).toBe('2');
});

it('handles division by zero gracefully', () => {
  const result = operate('5', '0', '÷');
  expect(result).toBe("Can't divide by 0.");
});

it('calculates modulo correctly', () => {
  const result = operate('7', '4', '%');
  expect(result).toBe('3');
});

it('handles modulo with divisor as zero gracefully', () => {
  const result = operate('8', '0', '%');
  expect(result).toBe("Can't find modulo as can't divide by 0.");
});

it('throws an error for unknown operation', () => {
  expect(() => {
    operate('2', '3', '^');
  }).toThrow("Unknown operation '^'");
});
