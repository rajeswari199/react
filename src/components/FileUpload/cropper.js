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
import Base64 from 'base-64'
import { getCroppedImg, cropDimensions, initialCropDimension } from './croppedImage'


export function Cropper({ ...props }) {
  const [upImg, setUpImg] = useState();
  const [image, setImg] = useState();
  const imgRef = useRef({});
  const [crop, setCrop] = useState(initialCropDimension);

  const onSelectFile = e => {
    if (get(e, 'target.files[0].size', 0) > 5239999) {
      props.setErrorAction('You can select files maximum of 5MB');
    } else if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      e.target.value = '';
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
    setCrop(cropDimensions(img));
    return false; // Return false if you set crop state in here.
  }, []);

  const fileUpload = async () => {
    const asynchronousCrop = true;
    const image = await getCroppedImg(crop, imgRef, asynchronousCrop);
    if(asynchronousCrop){
      const reader = new FileReader();
      reader.onloadend = function() {
          const string = reader.result;
          const buffer = Base64.encode(string);
          const data = "data:image/png;base64,"+buffer;
          setImg(data)
      };
      reader.readAsBinaryString(image);
    } else {
      setImg(image)
    }
    // props.onFileSelect(image, setLogoUpload, setShow, setIsLoading);
  };

  return (
    <div className='fileUpload'>
      <div>
        <div className='files-use'>
          <p className='text-left text-large f-11 font-bold'>
            LOGO
            </p>
          <div className='file-field cursor-pointer'>
            <input
              type='file'
              id='fileupload'
              name='upload-file'
              accept='image/*'
              onChange={onSelectFile}
              data-testid='fileupload'
            />
            {/* <div className='file-field-select'>
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
            </div> */}
          </div>
        </div>
      </div>
      <div className='w-100 d-flex justify-content-end'>
      </div>
      {
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
      }
      <div className='btn-footer mt-4'>
        <button name={'Save'} type='button' onClick={() => fileUpload()} >Save</button>
      </div>
      <img alt='preview' src={image} />
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
