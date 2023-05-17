import _ from 'lodash'
import { Optional } from 'utility-types'
import { mergeObjects } from 'mergerobjects'
import React, { FC, forwardRef } from 'react'

interface MergerProps<ORIGINAL_PROPS extends object> {
  $overwrite?: Optional<ORIGINAL_PROPS>
  $preserve?: Optional<ORIGINAL_PROPS>
}

function withPropsMerge<ORIGINAL_PROPS extends object>(OriginalComponent: FC<ORIGINAL_PROPS>) {
  return forwardRef((props: ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>, ref) => {
    const { $overwrite = {}, $preserve = {} } = props
    const injectedProps = mergeObjects($preserve, props, $overwrite)
    const originalPropsFiltered = _.omit(injectedProps as object, ['$overwrite', '$preserve'])
    return <OriginalComponent {...(originalPropsFiltered as ORIGINAL_PROPS)} ref={ref} />
  })
}

export default withPropsMerge
