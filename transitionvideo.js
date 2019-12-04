export class TransitionVideo {

    constructor(metadata) {
        this.metadata = metadata;
    }

    playVideo(container) {
        this.container = container; 
        this.createVideo();
        
        this.video.play();
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