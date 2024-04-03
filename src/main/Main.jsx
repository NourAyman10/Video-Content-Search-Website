import React, { Fragment, useState } from 'react'
import axios from 'axios';
import styles from "./Main.module.css"
import footerImg from "../assets/footer.svg"
import NavBar from '../components/navBar/NavBar'
import RadioButton from '../components/radioButton/RadioButton'
import UploadVideo from '../components/uploadVideo/UploadVideo'

const Main = () => {
    const [videoLink, setVideoLink] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await axios.post('/vos', { text: videoLink });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };


    return (
        <Fragment>
            <NavBar />
            <main>
                <h1>Video Content Search</h1>
                <p>The leading AI-powered video content search platform.</p>
                <section>
                    <UploadVideo />
                    <input type="text" id={styles.textQuery} placeholder="Write your text here..." />
                    <div className={styles.container}>
                        {/* start search type radio buttons */}
                        <div className={styles.searchTypeContainer}>

                            {/* start audio-radio button */}
                            <RadioButton id_value="audio" name_value="searchType" current_value="audio" icon="audio" alt_value="audio-icon">Audio</RadioButton>
                            {/* end audio-radio button */}

                            {/* start video-radio button */}
                            <RadioButton id_value="video" name_value="searchType" current_value="video" icon="video" alt_value="video-icon">Video</RadioButton>
                            {/* end video-radio button */}
                        </div>
                        {/* end search type radio buttons */}
                        <button onClick={handleSubmit}>Search</button>
                    </div>

                </section>
            </main>
            <footer>
                <img src={footerImg} alt="footer" />
            </footer>
        </Fragment>
    )
}

export default Main