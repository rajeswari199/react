
import React from 'react'
import Cropper from './cropper';

class FileUpload extends React.Component {
    onProfileLogoSelect = (
        fileData,
        showSuccessMessage,
        closeModal,
        setModalLoading,
    ) => {
        const logoData = {
            logo: fileData,
        };
        // updateProfileLogo({
        //   logoData,
        //   successFunction: () => showSuccessMessage(true),
        //   errorFunction: () => closeModal(false),
        //   loaderFunction: setModalLoading,
        // });
    };

    render() {
        return (
            <div>
                <Cropper
                    shouldDisplayHeader={false}
                    onFileSelect={this.onProfileLogoSelect}
                    logoData={data => console.log(data)}
                    setErrorAction={(error) => console.log(error)}
                />
            </div>
        )
    }
}


export default FileUpload
