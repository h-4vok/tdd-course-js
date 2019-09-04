import { BracketValidator } from '../src/bracket-validator';

describe('BracketValidator', () => {
  let subject = null;
  let characterSetGetter = null;

  beforeAll(() => {
    characterSetGetter = {
      getClosersToOpeners: () => ({
        '}': '{',
        ']': '[',
        ')': '('
      }),

      openers: { '(': true, '[': true, '{': true }
    };
  });

  beforeEach(() => {
    subject = new BracketValidator(characterSetGetter);
  });

  const testIsBalancedBrackets = (input, expectedOutput) => {
    test(input || 'null', () => {
      const output = subject.isBalancedBrackets(input);
      expect(output).toBe(expectedOutput);
    });
  };

  const runTestIsBalancedBrackets = (cases, expectedOutput) =>
    cases.forEach(input => testIsBalancedBrackets(input, expectedOutput));

  const successCases = [null, '', '()', '{(())}'];
  const failedCases = ['(', '()(){', '(('];

  runTestIsBalancedBrackets(failedCases, false);
  runTestIsBalancedBrackets(successCases, true);
});
