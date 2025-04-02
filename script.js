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
        title: 'Hice retos con diferentes EMOJIS',
        keywords: ['enchiladas', 'comedia']
    },
    {
        id: 'rCSwYImGvIY',
        title: 'Título del Video 4',
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
            <div class="video-container">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>${video.title}</h3>
            </div>
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
