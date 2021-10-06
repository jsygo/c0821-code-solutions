let currentCount = 3;

const intervalId = setInterval(() => {
  if (currentCount > 0) {
    console.log(currentCount);
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
  currentCount--;
}, 1000);
