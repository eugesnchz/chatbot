const chat = document.getElementById("chat");
const input = document.getElementById("user-input");

function addMessage(message, sender) {
  const msg = document.createElement("div");
  msg.classList.add(sender);
  msg.textContent = message;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

input.addEventListener("keydown", function(event) {
  if(event.key === "Enter" && input.value.trim() !== "") {
    const userMessage = input.value.trim().toLowerCase();
    addMessage(userMessage, "user");
    input.value = "";

    if(userMessage.includes("hola")) {
      addMessage("¡Hola! El equipo 4Lab está encantado de atenderte Maite. ¿En qué puedo ayudarte?", "bot");
    } else if(userMessage.includes("adiós")) {
      addMessage("¡Hasta luego! Gracias por tu confianza.", "bot");
    } else if(userMessage.includes("gracias")) {
      addMessage("¡De nada! Es un placer poder ayudarte.", "bot");
    } else {
      addMessage("Maite, no me han entrenado tanto jajaja", "bot");
    }
  }
});
