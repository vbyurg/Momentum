import trackList from './trackList.js';

const play = document.querySelector('.play');
const prevPlay = document.querySelector('.play-prev');
const playList = document.querySelector('.play-list');
const nextPlay = document.querySelector('.play-next');
const isPlay = play.classList.contains('pause');
let currentlyPlaying = 0;
const audio = new Audio();

// Play / Pause
play.addEventListener('click', () => {
    const isPlay = play.classList.contains('pause');

    // Play
    function playSong() {
        audio.src = trackList[currentlyPlaying].src;
        audio.play();
        play.classList.add('pause');

    }
    // Pause
    function pauseSong() {
        audio.pause();
        play.classList.remove('pause');
    }

    // Check if song is playing
    if (isPlay) {
        pauseSong();

    } else {
        playSong();
    }
});

// Play Next Song
function playNext() {
    if (currentlyPlaying >= trackList.length - 1) {
        currentlyPlaying = 0;
    } else {
        currentlyPlaying++;
    }
    audio.src = trackList[currentlyPlaying].src;
    audio.currentTime = 0;
    audio.play();
    play.classList.add('pause');
    // isPlay = true;
}

// Play Previous Song
function playPrev() {
    if (currentlyPlaying <= 0) {
        currentlyPlaying = trackList.length - 1;
    } else {
        currentlyPlaying--;
    }
    audio.src = trackList[currentlyPlaying].src;
    audio.currentTime = 0;
    audio.play();
    play.classList.add('pause');
    // isPlay = true;
}

//  Playback in a circle
function circlePlay() {
    if (audio.ended) {
        // isPlay = false;
        currentlyPlaying++
        playNext();
    }
}

// Add playlist to DOM
trackList.forEach((track, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${track.title} / ${track.duration}`;
    li.dataset.index = index
    li.classList.add('play-item');
    playList.appendChild(li);
});


// Play songs from playlist
const tracksList = document.querySelectorAll('.play-list li');

tracksList.forEach(track => {
    track.addEventListener('click', function () {
        const currentIndex = this.dataset.index;
        // Playing the current song
        if (isPlay) {
            audio.pause();
            play.classList.remove('pause');

        } else {
            audio.src = trackList[currentIndex].src;
            audio.currentTime = 0;
            audio.play();
            play.classList.add('pause');
            
            tracksList.forEach(track => track.classList.remove('item-active'));
            this.classList.add('item-active');
        }
    });
});

nextPlay.addEventListener('click', playNext);
prevPlay.addEventListener('click', playPrev);
audio.addEventListener('ended', circlePlay);