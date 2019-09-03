import { BracketsValidator } from '../src/brackets-validator';

describe(typeof BracketsValidator, () => {
  let subject = null;

  beforeEach(() => {
    subject = new BracketsValidator();
  });

  const testAndExpect = (input, expected, description) => {
    test(description || input, () => {
      const output = subject.validate(input);
      expect(output).toBe(expected);
    });
  };

  const testSuccess = (input, description) => testAndExpect(input, true, description);
  const testFailure = (input, description) => testAndExpect(input, false, description);

  testSuccess(null, 'null');
  testSuccess('', 'empty');

  testFailure('(');
  testSuccess('()');
  testSuccess('[]');
  testSuccess('{}');
});
