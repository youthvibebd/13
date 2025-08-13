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
