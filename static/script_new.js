function generateResource() {
    const topic = document.getElementById("topic").value.trim();
    if (!topic) return alert("Please enter a topic.");

    fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, resourceType: "ebook" })
    })
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("ebook-links");
      if (data.ebooks && data.ebooks.length > 0) {
        container.innerHTML = data.ebooks.map(e =>
          `<li><a href="${e.link}" target="_blank">${e.title}</a></li>`
        ).join("");
      } else {
        container.innerHTML = `<li>No eBooks found for this topic.</li>`;
      }
    })
    .catch(err => {
      console.error(err);
      alert("An error occurred while fetching eBooks.");
    });
  }
document.addEventListener("DOMContentLoaded", function () {
    const topicInput = document.getElementById("topic");
    if (topicInput) {
        topicInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                generateResource();
            }
        });
    }
});
