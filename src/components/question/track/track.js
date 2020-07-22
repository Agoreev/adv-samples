import React, { Component, createRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import classes from "./track.module.css";
import AudioSpectrum from "react-audio-spectrum";
import { isSafari, isMobile } from "react-device-detect";

class Track extends Component {
  state = {
    audioCanPlay: false,
    autoPlay: false,
  };
  //must play on track prop changes
  componentDidUpdate(prevProps) {
    if (this.props.track !== prevProps.track) {
      this.player.current.audio.current.play();
    }
  }
  player = createRef();

  onAudioCanPlay = () => {
    this.setState({
      audioCanPlay: true,
    });
  };

  render() {
    const { track, onTrackEnded } = this.props;

    let vizualizer = <div className={classes.Vizualizer}></div>;

    if (this.state.audioCanPlay && (!isSafari || isMobile)) {
      vizualizer = (
        <div className={classes.Vizualizer}>
          <AudioSpectrum
            id="audio-canvas"
            height={100}
            width={300}
            audioEle={this.player.current.audio.current}
            capColor={"#FF2A73"}
            capHeight={2}
            meterWidth={10}
            meterCount={512}
            meterColor={[
              { stop: 0, color: "#3D58F4" },
              { stop: 0.5, color: "#883CD0" },
              { stop: 1, color: "#D924AC" },
            ]}
            gap={4}
          />
        </div>
      );
    }
    return (
      <div className={classes.Track}>
        {vizualizer}
        <AudioPlayer
          customAdditionalControls={[]}
          showJumpControls={false}
          src={track}
          onEnded={onTrackEnded}
          ref={this.player}
          onCanPlay={this.onAudioCanPlay}
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}

export default Track;
