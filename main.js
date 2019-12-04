import {data} from './data.js'
import {TransitionVideo} from './transitionvideo.js'

const curVideoContainer = document.getElementById('vid2');
const prevVideoContainer = document.getElementById('vid1');
let lastVideo; 

// Build buttons
Object.keys(data).forEach(videoName => {
    let button = document.createElement('button');
    button.innerHTML = videoName;

    button.addEventListener('click', () => {
        playVideo(videoName);
    })

    document.getElementById('buttons').appendChild(button);
})

function playVideo(videoName) {
    const metadata = data[videoName];
    let video = new TransitionVideo(metadata);

    video.playVideo(curVideoContainer, lastVideo, prevVideoContainer);

    lastVideo = video; 
}