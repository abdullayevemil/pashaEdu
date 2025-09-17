const chatbotIcon = document.querySelector(".chatbot-icon");
const chatbotWindow = document.querySelector(".chatbot-window");
const chatMessages = document.querySelector(".chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Toggle chat window on icon click
chatbotIcon.addEventListener("click", () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === "flex" ? "none" : "flex";
});

// Add message to chat
function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener("click", async () => {
  const message = chatInput.value.trim();
  if (!message) return;
  addMessage(message, "user");
  chatInput.value = "";

  addMessage("Thinking...", "bot"); // temporary message
  const lastBotMessage = chatMessages.querySelector(".message.bot:last-child");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    lastBotMessage.textContent = data.answer;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (err) {
    lastBotMessage.textContent = "Error fetching answer.";
    console.error(err);
  }
});

// Send message on Enter key
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Auto show chatbot after 3 seconds and greet user
window.addEventListener("load", () => {
  setTimeout(() => {
    chatbotWindow.style.display = "flex";
    addMessage("Hi, how can I help you?", "bot");
  }, 3000);
});
