// Initialize storage if empty
if (!localStorage.getItem('websiteContent')) {
    const defaultContent = {
        news: [
            {
                title: '"Eternal Shadows" Album Release',
                date: 'AUGUST 15, 2025',
                excerpt: 'Our highly anticipated third studio album is now available worldwide. 12 tracks of our darkest and most intricate compositions to date.',
                icon: 'fas fa-compact-disc'
            },
            // Add other default news items
        ],
        music: {
            albumTitle: 'ETERNAL SHADOWS',
            subtitle: 'The Third Studio Album | Released August 15, 2025',
            tracks: [
                '01|Requiem for the Damned',
                '02|Shadows Embrace',
                // Add other default tracks
            ]
        },
        // Add other default content
    };
    localStorage.setItem('websiteContent', JSON.stringify(defaultContent));
}

// In the admin-save-btn click handler, replace the alerts with actual saving:
case 'news-tab':
    const newsTitle = document.getElementById('news-title').value;
    const newsDate = document.getElementById('news-date').value;
    const newsContent = document.getElementById('news-content').value;
    
    const websiteContent = JSON.parse(localStorage.getItem('websiteContent'));
    websiteContent.news.push({
        title: newsTitle,
        date: formatDate(newsDate), // You'll need a date formatting function
        excerpt: newsContent,
        icon: 'fas fa-newspaper' // Default icon or get from form
    });
    localStorage.setItem('websiteContent', JSON.stringify(websiteContent));
    alert('News item saved!');
    break;
// Load news from storage
function loadNews() {
    const websiteContent = JSON.parse(localStorage.getItem('websiteContent'));
    const newsGrid = document.querySelector('.news-grid');
    newsGrid.innerHTML = '';
    
    websiteContent.news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">
                <i class="${item.icon}"></i>
            </div>
            <div class="news-content">
                <span class="news-date">${item.date}</span>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-excerpt">${item.excerpt}</p>
                <a href="#" class="news-link">Read More</a>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    // Call other load functions for music, videos, etc.
});
case 'music-tab':
    const albumTitle = document.getElementById('album-title').value;
    const albumSubtitle = document.getElementById('album-subtitle').value;
    const albumTracks = document.getElementById('album-tracks').value.split('\n');
    
    const websiteContent = JSON.parse(localStorage.getItem('websiteContent'));
    websiteContent.music = {
        albumTitle,
        subtitle: albumSubtitle,
        tracks: albumTracks
    };
    localStorage.setItem('websiteContent', JSON.stringify(websiteContent));
    alert('Music content saved!');
    break;
function loadMusic() {
    const websiteContent = JSON.parse(localStorage.getItem('websiteContent'));
    const music = websiteContent.music;
    
    document.querySelector('.album-title').textContent = music.albumTitle;
    document.querySelector('.album-subtitle').textContent = music.subtitle;
    
    const trackList = document.querySelector('.track-list');
    trackList.innerHTML = '';
    
    music.tracks.forEach(track => {
        const [number, title] = track.split('|');
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <span class="track-number">${number}</span>
                ${title}
            </div>
            <span class="track-play"><i class="fas fa-play"></i></span>
        `;
        trackList.appendChild(li);
    });
}
