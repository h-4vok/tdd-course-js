/* eslint-disable no-return-assign */
export class BracketValidator {
  // constructor injection
  constructor(characterSetGetter) {
    this.characterSetGetter = characterSetGetter;
  }

  // setter injection
  setCharacterSetGetter = value => (this.characterSetGetter = value);

  isOpener(char) {
    return this.characterSetGetter.openers[char];
  }

  isBalancedBrackets = str => {
    if (!str) return true;
    if (str.length % 2 === 1) return false;

    const closersToOpeners = this.characterSetGetter.getClosersToOpeners();
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const currentChar = str.charAt(i);

      if (this.isOpener(currentChar)) {
        stack.push(currentChar);
      } else {
        if (!stack.length) {
          return false;
        }

        const matches = stack[stack.length - 1] === closersToOpeners[currentChar];

        if (!matches) {
          return false;
        }

        stack.pop();
      }
    }

    return stack.length === 0;
  };
}
