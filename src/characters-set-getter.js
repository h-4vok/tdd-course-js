export class CharacterSetGetter {
  getClosersToOpeners = () => ({
    '}': '{',
    ']': '[',
    ')': '('
  }); // going to api

  openers = { '(': true, '[': true, '{': true }; // going to api
}
