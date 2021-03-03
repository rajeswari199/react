import React from 'react'
import { isArray, isObject, get } from 'lodash'

export const GetWrappedChild = ({ children }) => {
	const getAlteredChildren = (childrenArray) => React.Children.map(childrenArray,
		child => {
			console.log(childrenArray)
			//condition to check if it is a span tag and add new props.
			if (!isArray(get(child, 'props.children', '')) && child.type === 'span') {
				return React.cloneElement(child,
					{ style: { color: 'red' } })
			}

			//condition to check if the dom extends with object or array of children.
			if (isArray(get(child, 'props.children', ''))
				|| isObject(get(child, 'props.children', ''))) {
				// check for span tag in children array.
				const alteredChildren = getAlteredChildren(get(child, 'props.children', ''))

				// cloneElement with modified children array.
				return React.cloneElement(child,
					{...child.props }, [...alteredChildren])
			}
			return child
		}
	)
	return getAlteredChildren(children)
}

export default GetWrappedChild
