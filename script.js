document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.post-video');

    const playVideo = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    };

    const observer = new IntersectionObserver(playVideo, { threshold: 0.5 });

    videos.forEach(video => {
        observer.observe(video);
    });
});