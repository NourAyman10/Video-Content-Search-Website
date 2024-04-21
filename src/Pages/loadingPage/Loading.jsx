import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Lottie from 'react-lottie'
import styles from './Loading.module.css'
import loadingAnimathion from '../../assets/loading'

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimathion,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Fragment>
            <div className={styles.loading}>

                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
                <p>Please wait, it takes a few minutes to complete this process...</p>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Loading