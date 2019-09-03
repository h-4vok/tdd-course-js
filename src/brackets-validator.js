export class BracketsValidator {
  validate(input) {
    if (!input) return true;
    if (input.length % 2 === 1) return false;

    return null;
  }
}
