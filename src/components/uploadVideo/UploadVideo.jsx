import React, { Fragment, useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const UploadVideo = () => {
    const [file, setFile] = useState(null);
    const [rejected, setRejected] = useState("");

    const onDrop = useCallback((acceptedFile, rejectedFile) => {
        if (acceptedFile.length) {
            const selectedFile = acceptedFile[0]; // Get the first file from the accepted files
            selectedFile.preview = URL.createObjectURL(selectedFile); // Assign preview URL to the selected file
            setFile(selectedFile); 
        }
        if (rejectedFile.length) {
            setRejected(rejectedFile[0].errors[0].message); 
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop, 
        accept: {
            'video/*': []
        }})
    const removeFile = () => {
        setFile(null);
    }
    const removeRejected = () => {
        setRejected("");
    }
    return (
        <Fragment>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the file here ...</p> : 
                        <p>Drag and drop a file here, or click to select a file</p>
                }
            </div>
            <div>
                {file && <Fragment><video src={file.preview} alt={file.name} width={300} height={300} controls /><button onClick={removeFile}>X</button></Fragment>}
                {rejected && <Fragment><h1>{rejected}</h1><button onClick={removeRejected}>X</button></Fragment>}
            </div>
        </Fragment>
    )
}

export default UploadVideo