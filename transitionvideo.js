export class TransitionVideo {

    constructor(metadata) {
        this.metadata = metadata;
    }

    playVideo(container, fromVideo, moveFromTo) {
        this.container = container; 

        if (fromVideo) {
            fromVideo.moveTo(moveFromTo);
        }

        this.createVideo();
        this.video.play();
    }

    moveTo(container) {
        this.container = container;
        this.container.innerHTML = "";
        container.appendChild(this.video);
    }

    createVideo() {
        // Clear out the container 
        this.container.innerHTML = "";

        // Create the video node
        this.video = document.createElement('video');
        this.video.src = this.metadata.video;

        // Add it to the container
        this.container.appendChild(this.video);
    }

}