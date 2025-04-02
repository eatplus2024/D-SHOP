const videos = [
    {
        title: "Marie le tiene miedo a las Vacunas",
        youtubeId: "NQZWHR9i_Cw",
        keywords: ["tutorial", "vacunas", "miedo"],
    },
    {
        title: "POV: Cuando te PICA un MOSQUITO",
        youtubeId: "TwAPSdD0eNA",
        keywords: ["receta", "mosquitos", "picaduras"],
    },
    {
         title: "Mi Mamá Se Anchilo",
        youtubeId: "gmjW3wOiLhA",
        keywords: ["enchiladas", "comedia", "aventura"],
    },
    {
         title: "Hice retos con diferentes EMOJIS",
        youtubeId: "rCSwYImGvIY",
        keywords: ["emojis", "retos", "aventura"],
    },
    // Agrega más videos aquí...
];

const searchInput = document.getElementById("searchInput");
const videoList = document.getElementById("videoList");

function displayVideos(videosToDisplay) {
    videoList.innerHTML = "";
    videosToDisplay.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg" alt="Miniatura de ${video.title}">
            <h3>${video.title}</h3>
            <a href="https://www.youtube.com/watch?v=${video.youtubeId}" target="_blank">Ver en YouTube</a>
        `;
        videoList.appendChild(videoItem);
    });
}

searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredVideos = videos.filter(video => {
        return video.title.toLowerCase().includes(searchTerm) ||
               video.keywords.some(keyword => keyword.includes(searchTerm));
    });
    displayVideos(filteredVideos);
});

displayVideos(videos); // Mostrar todos los videos al cargar la página
