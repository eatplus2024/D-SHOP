const videos = [
    {
        id: 'NQZWHR9i_Cw',
        title: 'Marie le tiene miedo a las Vacunas',
        keywords: ['miedo', 'vacunas']
    },
    {
        id: 'TwAPSdD0eNA',
        title: 'POV: Cuando te PICA un MOSQUITO',
        keywords: ['picaduras', 'mosquitos']
    },
    {
        id: 'gmjW3wOiLhA',
        title: 'MI MAMA SE ENCHILO',
        keywords: ['enchiladas', 'comedia']
    },
    {
        id: 'rCSwYImGvIY',
        title: 'Hice retos con diferentes EMOJIS',
        keywords: ['amojis', 'retos']
    },
];

const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');

function renderVideos(videoList) {
    videoGrid.innerHTML = '';
    videoList.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${video.id}">
                <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}">
                <h3>${video.title}</h3>
            </a>
        `;
        videoGrid.appendChild(videoItem);
    });
}

function filterVideos(searchTerm) {
    const filteredVideos = videos.filter(video => {
        return video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    renderVideos(filteredVideos);
}

renderVideos(videos);

searchInput.addEventListener('input', () => {
    filterVideos(searchInput.value);
});
