import { videoData } from "/video-data.js";

let videosHtml = "";

videoData.forEach((video) => {
  videosHtml += `
    <div class="video-preview">
  
      <div class="thumbnail-row">
        <a href="${video.videoLink}">
          <img class="thumbnail" src="${video.thumbnail}" >
        </a>
        <div class="video-time">${video.videoTime}</div>
      </div>

      <div class="video-info-grid">

        <div>
          <img src="${video.profileImage}" class="profile-picture">
        </div>

        <div>
          <p class="video-title">
            ${video.title}
          </p>

          <p class="video-author"> 
            ${video.author}
          </p>
    
          <p class="video-state">
            ${video.views}
          </p>
        </div>

      </div>
    </div>
  `;
});

document.querySelector(".js-videos-grid").innerHTML = videosHtml;

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector("main");
  const notificationsCount = document.querySelector(".notifications-count");

  hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
    mainContent.classList.toggle("move-right");
  });

  sidebar.addEventListener("mouseenter", () => {
    mainContent.classList.add("no-scroll");
  });

  sidebar.addEventListener("mouseleave", () => {
    mainContent.classList.remove("no-scroll");
  });

  // Increment notifications count every 20 seconds
  setInterval(() => {
    notificationsCount.textContent =
      parseInt(notificationsCount.textContent) + 1;
  }, 20000);
});
