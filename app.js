document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "🔫 here's your random ass activity! 🎯"    
      document.body.classList.add("bot-activity")
      })
})