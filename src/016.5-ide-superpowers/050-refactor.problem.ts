const func = () => {
  // Refactor this to be its own function
  console.log(randomPercentage());
};
function randomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
