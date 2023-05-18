import React, { FC, forwardRef } from 'react'
import _ from 'lodash'
import { Optional } from 'utility-types'
import { mergeObjects } from 'mergerobjects'

interface MergerProps<ORIGINAL_PROPS extends object> {
  $overwrite?: Optional<ORIGINAL_PROPS> | Optional<ORIGINAL_PROPS>[]
  $preserve?: Optional<ORIGINAL_PROPS> | Optional<ORIGINAL_PROPS>[]
}

function withPropsMerge<ORIGINAL_PROPS extends object>(OriginalComponent: FC<ORIGINAL_PROPS>) {
  return forwardRef(
    ({ $overwrite = [], $preserve = [], ...props }: ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>, ref) => {
      const $overwrite_ = _.isArray($overwrite) ? $overwrite : [$overwrite]
      const $preserve_ = _.isArray($preserve) ? $preserve : [$preserve]
      const injectedProps = mergeObjects(...$preserve_, props, ...$overwrite_)
      const originalPropsFiltered = _.omit(injectedProps as any, ['$overwrite', '$preserve'])
      return <OriginalComponent {...(originalPropsFiltered as ORIGINAL_PROPS)} ref={ref} />
    }
  )
}

export default withPropsMerge
