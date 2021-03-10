/**
 *
 * CopyContent
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

/**
 * CopyContent
 *
 * @param root0
 * @param root0.text
 * @param root0.image
 * @param root0.successText
 * @param root0.styledClass
 * @param root0.textRef
 * @param root0.copyObject
 * @param root0.copyValue
 * @param root0.successClass
 * @param root0.imageClass
 * @param root0.textClass
 * @param root0.testId
 * @param root0.displayContent
 * @param root0.displayToastr
 * @param root0.setShow
 * @return {void}
 */
function CopyContent({
    text,
    textRef,
    copyObject = {},
    displayContent,
    copyValue,
    onSuccess,
}) {

    const copyToClipBoard = () => {
        if (!isEmpty(copyObject)) {
            return copyObjectToClipboard();
        } else if (copyValue) {
            return copyValueToClipboard();
        } else {
            return copyText();
        }
    };

    /**
     * function to copy list of details that are not in dom (copy as object).
     */
    const copyObjectToClipboard = () => {
        let copyText = '';
        Object.entries(copyObject).forEach(
            ([key, value]) => (copyText += `${key}: ${value} \n`),
        );
        const textArea = document.createElement('textarea');
        textArea.value = copyText;

        // To avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        onSuccess();
    };

    /**
     * function to copy details that are not in dom (copy as text).
     */
    const copyValueToClipboard = () => {
        let copyText = '';
        Object.entries(copyValue).forEach(
            ([key, value]) => (copyText += `${value}`),
        );
        const textArea = document.createElement('textarea');
        textArea.value = copyText;

        // To avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        onSuccess();
    };

    const copyText = () => {
        window.getSelection().removeAllRanges();
        const range = document.createRange();
        range.selectNode(textRef);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        onSuccess();
    };

    return (
        <Fragment>
            <div
                className={`${isEmpty(displayContent) && 'ml-2'}`}
                onClick={() => copyToClipBoard()}
            >
                <div>
                    <p>{text}</p>
                </div>
            </div>
        </Fragment>
    );
}

CopyContent.propTypes = {
    text: PropTypes.string,
    textClass: PropTypes.string,
    imageClass: PropTypes.string,
    successText: PropTypes.string,
    styledClass: PropTypes.string,
    textRef: PropTypes.object,
    copyObject: PropTypes.object,
    displayContent: PropTypes.object,
    copyValue: PropTypes.object,
    successClass: PropTypes.string,
    image: PropTypes.string,
    testId: PropTypes.string,
    displayToastr: PropTypes.bool,
    setShow: PropTypes.func,
};

export default memo(CopyContent);
