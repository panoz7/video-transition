export class TransitionVideo {

    constructor(metadata) {
        this.metadata = metadata;
    }

    async playVideo(container, fromVideo, moveFromTo) {
        this.container = container; 

        if (fromVideo) {
            // Move the from video into the other container
            fromVideo.moveTo(moveFromTo);
        }

        this.createVideo();
        await this.playVideoUntilPause();
    }

    async playVideoUntilPause() {
        this.video.play();

        // Pause the video at the pause frame
        await this.trackUntilFrame(this.metadata.pauseFrame);
        this.video.pause();

        // Jump to the first pause point
        this.jumpToFirstPause();

        return true; 
    }

    jumpToFirstPause() {
        const pauseTime = this.getTimeFromFrame(this.metadata.pauseFrame + this.metadata.pauseDuration);
        this.video.currentTime = pauseTime; 
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

    getCurrentFrame() {
        return Math.floor(this.video.currentTime * this.metadata.frameRate);
    }

    getFrameFromTime(time) {
        return Math.floor(time * this.metadata.frameRate);
    }

    getTimeFromFrame(frame) {
        return frame / this.metadata.frameRate;
    }

    trackUntilFrame(frame) {
        return new Promise((resolve) => {
            
            let checkTime = () => {
                const currentFrame = this.getCurrentFrame();
                if (currentFrame >= frame) {
                    resolve()
                }
                window.requestAnimationFrame(checkTime);
            }

            window.requestAnimationFrame(checkTime);
        })
    }

}