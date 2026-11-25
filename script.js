// document.addEventListener("DOMContentLoaded", function () {
//     function openPage(url) {
//         window.open(url, "_blank");
//     }

//     // Free resources → Game
//     // document.querySelector('a[href="rescue_mission.html"]').addEventListener("click", function (event) {
//     //     event.preventDefault();
//     //     openPage("rescue_mission.html");
//     // });
//     // Zia chatbot
//     document.querySelector(".chatbot-avatar").addEventListener("click", function () {
//         openPage("chatbot2.html");
//     });
//     const link = document.querySelector('a[href="rescue_mission.html"]');
//     if (link) {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             openPage("game/rescue_mission.html");
//         });
//     }
//     const ebook = document.querySelector('a[href="index_new.html"]');
//     if (ebook) {
//         ebook.addEventListener("click", function (event) {
//             event.preventDefault();
//             openPage("index_new.html");
//         });
//     }
//     // Other links (optional — already done probably)
//     document.querySelector('a[href="faq.html"]').addEventListener("click", function (event) {
//         event.preventDefault();
//         openPage("faq.html");
//     });

//     document.querySelector('a[href="consultation.html"]').addEventListener("click", function (event) {
//         event.preventDefault();
//         openPage("consultation.html");
//     });

//     document.querySelector('a[href="templates.html"]').addEventListener("click", function (event) {
//         event.preventDefault();
//         openPage("templates.html");
//     });

//     document.querySelector('a[href="quiz.html"]').addEventListener("click", function (event) {
//         event.preventDefault();
//         openPage("quiz.html");
//     });


//     document.querySelector('a[href="user-login.html"]').addEventListener("click", function (event) {
//         event.preventDefault();
//         openPage("user-login.html");
//     });

//     // Lawyer Login
//     document.querySelector('a[href="lawyer-login.html"]').addEventListener("click", function (event) {
//         event.preventDefault();
//         openPage("lawyer-login.html");
//     });
//     // eBook Generator
    
// });
document.addEventListener("DOMContentLoaded", function () {
    function openPage(url) {
        window.open(url, "_blank");
    }

    // Zia chatbot
    const zia = document.querySelector(".chatbot-avatar");
    if (zia) {
        zia.addEventListener("click", function () {
            openPage("chatbot2.html");
        });
    }

    const links = [
        ["rescue_mission.html", "game/rescue_mission.html"],
        ["index_new.html", "index_new.html"],
        ["faq.html", "faq.html"],
        ["consultation.html", "consultation.html"],
        ["templates.html", "templates.html"],
        ["quiz.html", "quiz.html"],
        ["user-login.html", "user-login.html"],
        ["lawyer-login.html", "lawyer-login.html"]
    ];

    links.forEach(([href, target]) => {
        const link = document.querySelector(`a[href="${href}"]`);
        if (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                openPage(target);
            });
        }
    });
});


// function generateResource() {
//     const topic = document.getElementById("topic").value.trim();

//     if (!topic) return alert("Please enter a topic.");
    
//     fetch("/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic, resourceType: "ebook" })
//     })
//     .then(res => res.json())
//     .then(data => {
//         if (data.ebooks && data.ebooks.length > 0) {
//             let html = data.ebooks.map(e => `<li><a href="${e.link}" target="_blank">${e.title}</a></li>`).join("");
//             document.getElementById("ebook-links").innerHTML = html;
//             document.getElementById("ebook-container").style.display = "block";
//         } else {
//             alert("No eBooks found for this topic.");
//         }
//     })
//     .catch(err => {
//         alert("An error occurred while fetching eBooks.");
//         console.error(err);
//     });
// }


// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;

// app.use(cors());

// // Use path.join for cross-platform compatibility
// // const templatesPath = 'C:\\Users\\skawa\\OneDrive\\Desktop\\pbl\\doc_for_template';
// // OR
// const templatesPath = 'C:/Users/skawa/OneDrive/Desktop/pbl/doc_for_template';


// // List template files
// app.get('/api/templates', (req, res) => {
//     fs.readdir(templatesPath, (err, files) => {
//         if (err) {
//             console.error('Error reading directory:', err);
//             return res.status(500).json({ error: 'Unable to read templates directory' });
//         }

//         const templates = files.map(file => ({
//             name: path.parse(file).name,
//             filePath: `/templates/${file}`
//         }));

//         res.json(templates);
//     });
// });

// // Serve templates statically
// app.use('/templates', express.static(templatesPath));

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
