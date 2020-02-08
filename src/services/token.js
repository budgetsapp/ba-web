export function decode(token) {
  const tokens = token.split('.');
  return atob(tokens[1]);
}
