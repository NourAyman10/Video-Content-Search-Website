import React, { Fragment, useState } from 'react'
import axios from 'axios';
import styles from "./Main.module.css"
import NavBar from '../components/navBar/NavBar'
import RadioButton from '../components/radioButton/RadioButton'
import Footer from '../components/footer/Footer';

const Main = () => {
    const [videoLink, setVideoLink] = useState('');
    const [textQuery, setTextQuery] = useState('');
    const [searchStatus, setSearchStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSearchStatusChange = (event) => {
        setSearchStatus(event.target.value)
    }

    const handleErrorMessage = (videoLink, textQuery, searchStatus) => {
        setErrorMessage("")
        if (!videoLink || !textQuery || !searchStatus) {
            setErrorMessage("Please fill all empty inputs")
            return false
        }
        if (!videoLink.match("^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$")) {
            setErrorMessage("Please write a valid youtube video link")
            return false
        }
        return true
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleErrorMessage(videoLink, textQuery, searchStatus)) {
            try {
                const response = await axios.post('/vos', { videoLink: videoLink, textQuery: textQuery, searchStatus: searchStatus });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <Fragment>
            <NavBar />
            <main>
                <h1>Video Content Search</h1>
                <p>The leading AI-powered video content search platform.</p>
                <section>
                    {/* start Video Link input */}
                    <input type="text" id={styles.videoLink}
                        placeholder="Write your youtube video link here..."
                        value={videoLink}
                        onChange={(event) => setVideoLink(event.target.value)} />
                    {/* end Video Link input */}

                    {/* start Text Query input */}
                    <input type="text" id={styles.textQuery}
                        placeholder="Write your text here..."
                        value={textQuery}
                        onChange={(event) => setTextQuery(event.target.value)} />
                    {/* start Text Query input */}

                    <div className={styles.container}>
                        {/* start search type radio buttons */}
                        <div className={styles.searchTypeContainer}
                            onChange={(event) => setSearchStatus(event.target.value)}>

                            {/* start audio-radio button */}
                            <RadioButton id_value="audio" name_value="searchType" current_value="audio" icon="audio" alt_value="audio-icon" onSearchStatusChange={onSearchStatusChange}>Audio</RadioButton>
                            {/* end audio-radio button */}

                            {/* start video-radio button */}
                            <RadioButton id_value="video" name_value="searchType" current_value="video" icon="video" alt_value="video-icon" onSearchStatusChange={onSearchStatusChange}>Video</RadioButton>
                            {/* end video-radio button */}
                        </div>
                        {/* end search type radio buttons */}
                        <button onClick={handleSubmit}>Search</button>
                    </div>

                    <div className={styles.errorMessage}>
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </section>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Main