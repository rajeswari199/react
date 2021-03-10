
/**
*
* CopyContent
*
*/

import React, { memo, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import AlertComp from 'components/Alert';

/**
 * CopyContent
 */
function CopyContent({
    textRef,
    copyObject = {},
    copyValue,
    successFunction,
    setShow,
}) {
    /**
     * function to be executed on component unmount.
     * clear set timeout on component will unmount.
     */
    useEffect(
        () =>
            function cleanup() {
                clearTimeout();
            },
        [],
    );

    /**
     * function to display success message.
     */
    const onSuccess = () => {
        if (successFunction) {
            successFunction();
        } else {
            setTimeout(() => {
                setShow(false);
            }, 2000);
        }
    };

    return (
        <Fragment>
            <CopyContent
                onSuccess={onSuccess}
                text={'copy content'}
                successText={'content copied'}
                copyValue={{ copy: 'copied value' }}
            />
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
    successFunction: PropTypes.func,
    successClass: PropTypes.string,
    image: PropTypes.string,
    testId: PropTypes.string,
    displayToastr: PropTypes.bool,
    setShow: PropTypes.func,
};

export default memo(CopyContent);
