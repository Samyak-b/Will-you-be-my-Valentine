document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".no");
    const yesButton = document.querySelector(".yes");

  const messages = [
    "Are you sure?",
    "Are you sure, sure?",
    "So you're choosing to wake up alone in the morning?",
    "But I was gonna make you breakfast...",
    "Not the kind of Breakfast you had in mind though!",
    "haha! I know you better",
    "pulls out a gun*",
    "NOW YOU BETTER SURRENDER YOURSELF TO ME",
    "I LOVE YOU TOO! ❤️",
  ];

  let messageIndex = 0;
  
    function handleNoClick() {
      // Change No button text
      noButton.textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;
  
      // Make Yes button bigger each time
      let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
      yesButton.style.fontSize = (currentSize * 1.5) + "px";
    }
  
    function handleYesClick() {
      window.location.href = "if_yes.html";
    }
  
    noButton.addEventListener("click", handleNoClick);
    yesButton.addEventListener("click", handleYesClick);
  });
