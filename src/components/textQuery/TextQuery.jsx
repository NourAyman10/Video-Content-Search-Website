import React from 'react'
import styles from "./TextQuery.module.css"


const TextQuery = ({value, onChange}) => {
  return (
    <input type="text" id={styles.textQuery}
                placeholder="Write your text here..."
                value={value}
                onChange={onChange} />
  )
}

export default TextQuery