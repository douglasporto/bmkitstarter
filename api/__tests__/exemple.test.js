function soma(a, b) {
  return a + b;
}
test('Example', () => {
  const result = soma(2, 2);
  expect(result).toBe(4);
});
