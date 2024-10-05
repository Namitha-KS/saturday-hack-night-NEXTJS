export function encrypt(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);
      let lower = (code >= 65 && code <= 90) ? 65 : 97;
      return String.fromCharCode(((code - lower + shift) % 26) + lower);
    }
    return char;
  }).join('');
}
