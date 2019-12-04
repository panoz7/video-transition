import {data} from './data.js'

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
}