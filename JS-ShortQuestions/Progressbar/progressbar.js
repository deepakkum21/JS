let progressBar = document.querySelector(".bar");

const startProgressJS = (sec) => {
  let percentCompleted = 0;
  const progressInterval = setInterval(() => {
    progressBar.style.width = percentCompleted + "%";
    percentCompleted++;
    if (percentCompleted > 100) clearInterval(progressInterval);
  }, (sec * 1000) / 100);
};

const startProgressCSS = (sec) => {
  progressBar.style.transition = `${sec}s linear all`;
  progressBar.style.width = "100%";
};
