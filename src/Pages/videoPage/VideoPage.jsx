import React, { Fragment, useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from "./VideoPage.module.css"
import MainLayout from '../../layout/MainLayout'

const VideoPage = () => {
    const location = useLocation();
    const videoSrcLink = useRef('');

    const timestamps = location.state.timestamps;
    const searchType = location.state.searchStatus;

    const convertToEmbeddedSrc = (normalSrc) => {
        const videoId = normalSrc.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|v\/|embed\/|.*[\/\?&]v=))([^#\&\?]*).*/)?.[1];
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}?start=0`;
        }
        return normalSrc;
    }

    const updateVideoSrcLink = (second) => {
        const link = videoSrcLink.current.src;
        const replacedText = link.replace(/start=\d+/g, `start=${second}`);
        videoSrcLink.current.src = replacedText;
    }

    useEffect(() => {
        const embeddedSrc = convertToEmbeddedSrc(location.state.videoPreviewLink);
        videoSrcLink.current.src = embeddedSrc;

    }, [location.state.videoPreviewLink]);


    return (
        <Fragment>
            <MainLayout>
                {/* <TextQuery value={textQuery} onChange={(event) => setTextQuery(event.target.value)} /> */}
                <section>
                    <iframe
                        ref={videoSrcLink}
                        src={videoSrcLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>

                </section>
                <section>
                    {timestamps.length === 0 ? <Fragment></Fragment>:
                        <Fragment>
                            <h3>Timestamps</h3>
                            <ul>
                                {timestamps.map((second, index) => {
                                    return (
                                        <li key={index} onClick={() => updateVideoSrcLink(second)}>{second}</li>
                                    )
                                })}
                            </ul>
                        </Fragment>}

                </section>
            </MainLayout>
        </Fragment>
    )
}

export default VideoPage