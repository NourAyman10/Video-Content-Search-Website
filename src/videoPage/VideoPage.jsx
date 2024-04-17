import React, { Fragment, useState, useEffect } from 'react'
import styles from "./VideoPage.module.css"
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import TextQuery from '../components/textQuery/TextQuery'

const VideoPage = ({ videoSrc }) => {
    const [textQuery, setTextQuery] = useState('');
    const [videoSrcLink, setVideoSrcLink] = useState('');

    const timestamps = [30, 60, 120, 180];

    const convertToEmbeddedSrc = (normalSrc) => {
        const videoId = normalSrc.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|v\/|embed\/|.*[\/\?&]v=))([^#\&\?]*).*/)?.[1];
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return normalSrc;
    }

    const updateVideoSrcLink = () => {
        setVideoSrcLink('')
    }

    // useEffect(() => {
    //     const embeddedSrc = convertToEmbeddedSrc(videoSrc);
    //     setVideoSrcLink(embeddedSrc);
    // }, []);

    return (
        <Fragment>
            <NavBar />

            <main>
                <TextQuery value={textQuery} onChange={(event) => setTextQuery(event.target.value)} />
                <section>
                    <iframe frameBorder="0"
                        src={videoSrcLink}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </section>
                <ul>
                    {timestamps.map((second, key) => {
                        return (
                            <Fragment>
                                <li key={key} onClick={updateVideoSrcLink}>{second}</li>
                            </Fragment>
                        )
                    })}
                </ul>
            </main>
            <Footer />
        </Fragment>
    )
}

export default VideoPage