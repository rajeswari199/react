/**
 *
 * FileUpload
 *
 */

import React, { useState, useCallback, useRef, memo } from 'react';
// import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';
import get from 'lodash/get';
import 'react-image-crop/dist/ReactCrop.css';

// import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
// import MerchantLogo from 'components/MerchantLogo';
// import messages from './messages';
// import './style.scss';

// import ButtonComp from 'components/Button';

/**
 * @param props.intl
 * @param {object} props comp props
 * @return {ReactElement} - return fileupload element
 */
export function Cropper({ intl, ...props }) {
  const [upImg, setUpImg] = useState();
  const [show, setShow] = useState(false);
  const imgRef = useRef({});
  const [isLoading, setIsLoading] = useState(false);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [logoUpload, setLogoUpload] = useState(false);

  const onSelectFile = e => {
    if (get(e, 'target.files[0].size', 0) > 5239999) {
      props.setErrorAction('You can select files maximum of 5MB');
    } else if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      e.target.value = '';
      setShow(true);
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
    setCrop({
      unit: 'px',
      width: img.width / 2,
      height: img.height / 2,
      x: img.width / 4,
      y: img.height / 4,
    });
    return false; // Return false if you set crop state in here.
  }, []);

  const fileUpload = () => {
    const image = getCroppedImg(crop);
    props.onFileSelect(image, setLogoUpload, setShow, setIsLoading);
  };

  const iconClose = () => {
    setShow(false);
  };

  const logoUploadSuccess = () => {
    setShow(false);
    setLogoUpload(false);
  };

  const getCroppedImg = pixelCrop => {
    const img = imgRef.current;
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      img,
      pixelCrop.x * scaleX,
      pixelCrop.y * scaleY,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );
    return canvas.toDataURL('image/png');
  };

  return (
    <div className='fileUpload'>
      <div>
        <div className='files-use'>
          {props.shouldDisplayHeader && (
            <p className='text-left text-large f-11 font-bold'>
              LOGO
            </p>
          )}
          <div className='file-field cursor-pointer'>
            <input
              type='file'
              id='fileupload'
              name='upload-file'
              accept='image/*'
              onChange={onSelectFile}
              data-testid='fileupload'
            />
            <div className='file-field-select'>
              {get(props, 'logoData.url', '') ? (
                <div className='user-logo'>
                  <label htmlFor='fileupload' className='cursor-pointer pl-0'>
                    {/* <MerchantLogo
                      styledClass={'mt-4 logo-style'}
                      logoData={props.logoData}
                    /> */}
                  </label>
                </div>
              ) : (
                  <div className='upload-content'>
                    <div className='mb-3 text-center'>
                      <p className='text-large f-11 font-bold text-center'>
                        Drop your Logo file here
                    </p>
                      <p className='text-large f-11 font-general'>
                        or
                      <span className='text-hint font-general text-primary'>
                          {' '}
                        Select a file from your computer
                      </span>
                      </p>
                      <p className='text-large f-11 font-general'>
                        PDF, JPG, GIF OR PNG
                    </p>
                    </div>
                    <p className='text-hint font-general'>
                      <span className='text-hint font-bold'>
                        Recommended size:
                    </span>
                    300 x 200 pixels. Maxium 5Mb in size
                  </p>
                  </div>
                )}
              <label htmlFor='fileupload'>
                <div className='cursor-pointer icon-file-upload' />
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal show={show} className='fileUploadModal' centered> */}
      <div className='w-100 d-flex justify-content-end'>
        {!logoUpload && (
          <div
            className='icon-close'
            onClick={() => {
              iconClose();
            }}
            data-testid='iconClose'
          />
        )}
      </div>
      {logoUpload ? (
        <div className='logoUpload m-auto'></div>
      ) : (
          <h5>
            Confirm logo area
          </h5>
        )}
      {/* <Modal.Body> */}
      {logoUpload ? (
        <h4>
          Logo Uploaded Successfully
        </h4>
      ) : (
          <ReactCrop
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            data-testid='cropImage'
            imageAlt='cropImage'
            onChange={c => setCrop(c)}
            keepSelection={true}
            minHeight={24}
            minWidth={24}
          />
        )}
      <div className='btn-footer mt-4'>
        {logoUpload ? (
          <button name={'Done'} type='button' >Done</button>
        ) : (
            <button name={'Save'} type='button' >Save</button>
          )}
      </div>
      {/* </Modal.Body>
      </Modal> */}
    </div>
  );
}

Cropper.propTypes = {
  onFileSelect: PropTypes.func,
  logoData: PropTypes.object,
  shouldDisplayHeader: PropTypes.bool,
  setErrorAction: PropTypes.func,
};

Cropper.defaultProps = {
  shouldDisplayHeader: true,
};

export default memo(Cropper);
