const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, speedCount, errorCount) {
  const newRow = document.createElement("div");
  console.log(Math.round((questionText.length/timeTaken)*60))
  newRow.classList.add("card");
  newRow.innerHTML = `
  <div>
    <h3>${questionText}</h3>
    <div>
      <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
      <p>Your Speed: <span class="bold">${speedCount}</span> CPM</p>
      <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
    </div>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, speedCount, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
    newRow.innerHTML = `
    <h3>${test.questionText}</h3>
    <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>Your Speed: <span class="bold">${test.speedCount}</span> CPM</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

  histories.appendChild(newRow);
  });
}
