import React, { Fragment } from 'react'
import styles from "./Main.module.css"
import footerImg from "../assets/footer.svg"
import NavBar from '../components/navBar/NavBar'
import RadioButton from '../components/radioButton/RadioButton'

const Main = () => {
    return (
        <Fragment>
            <NavBar />
            <main>
                <h1>Video Content Search</h1>
                <p>The leading AI-powered video content search platform.</p>
                <section>
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
                        <button>Search</button>
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