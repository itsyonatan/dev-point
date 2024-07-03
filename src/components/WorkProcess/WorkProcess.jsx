import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/video.mp4";
import {ControlBar, Player, PlayToggle} from 'video-react';
import 'video-react/dist/video-react.css';

const WorkProcess = () => {
    return (
        <div className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">Our work process</h2>
                    <p className="para__text">Follow a collaborative and transparent design process: Discovery, Research and Planning, Design, Development, and Launch & Support</p>

                    <div className="vid__container">
                        <Player autoPlay loop src = {WorkProcessVid}>
                            <ControlBar autoHide = {false} disableDefaultControls = {false}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;