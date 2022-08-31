let min;
let max;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default RandomNumber(getRandom);
{
  return (
    <p>
      {' '}
      Random value between {min} and {max}{' '}
    </p>
  );
}
