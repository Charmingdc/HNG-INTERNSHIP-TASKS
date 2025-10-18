(() => {
  // get clock element
  const clock = document.querySelector("#clock");
  if (!clock) return;

  const updateTime = () => {
    const date = new Date();
    clock.innerText = `Current Time: ${date.getTime()}`;
  };

  updateTime();
  setInterval(updateTime, 1000);
})();
