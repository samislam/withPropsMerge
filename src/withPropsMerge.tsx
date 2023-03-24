import _ from 'lodash'
import React, { FC } from 'react'
import { Optional } from 'utility-types'
import { mergeObjects } from 'mergerobjects'

interface MergerProps<ORIGINAL_PROPS extends object> {
  $overwrite?: Optional<ORIGINAL_PROPS>
  $preserve?: Optional<ORIGINAL_PROPS>
}

function withPropsMerge<ORIGINAL_PROPS extends object>(
  OriginalComponent: FC<ORIGINAL_PROPS>
): FC<ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>> {
  return (props) => {
    const { $overwrite = {}, $preserve = {} } = props
    const injectedProps = mergeObjects($preserve, props, $overwrite)
    const originalPropsFiltered = _.omit(injectedProps as object, ['$overwrite', '$preserve'])
    return <OriginalComponent {...(originalPropsFiltered as ORIGINAL_PROPS)} />
  }
}

export default withPropsMerge
