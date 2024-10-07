// Predefined list of favorite YouTube songs
const favoriteSongs = [
    {
        title: "Bol Na Halke Halke | Full Song | Jhoom Barabar Jhoom",
        artist: "Rahat Fateh Ali Khan, Mahalaxmi Iyer",
        url: "https://youtu.be/jXwg9l9D51A?si=QSwFbg_iwqsR8EtI"
    },
    {
        title: "Teri Meri Kahaani",
        artist: "Arijit Singh, Palak Muchhal",
        url: "https://youtu.be/ZWAGn4yyRMM?si=bqnBNS24UbGeQROq"
    },
    {
        title: "Sanam Re Tu Mera Sanam Hua Re",
        artist: "Arijit Singh",
        url: "https://youtu.be/GTTgKgzkKqI?si=QkBQa2iityZEVqef"
    }
];

// Function to extract YouTube video ID from URL
function getYoutubeId(url) {
    const regExp = /^.*(?:youtu.be\/|v\/|embed\/|watch\?v=|watch\?.+&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : null;
}

// Function to generate the song list dynamically
function generateSongList() {
    const songListContainer = document.getElementById('song-list');
    favoriteSongs.forEach(song => {
        const videoId = getYoutubeId(song.url);
        if (videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            // Create song item HTML
            const songItem = `
                <div class="song-item">
                    <a href="${song.url}" target="_blank">
                        <img src="${thumbnailUrl}" class="thumbnail" alt="Song Thumbnail">
                    </a>
                    <div class="song-details">
                        <h3>${song.title}</h3>
                        <p>${song.artist}</p>
                        <a href="${song.url}" target="_blank">Watch on YouTube</a>
                    </div>
                </div>
            `;

            // Append song item to the container
            songListContainer.innerHTML += songItem;
        }
    });
}

// Call the function when the page loads
window.onload = generateSongList;
