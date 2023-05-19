import React, { FC, PropsWithChildren, forwardRef } from 'react'
import _ from 'lodash'
import { Optional } from 'utility-types'
import { mergeObjects } from 'mergerobjects'

interface MergerProps<ORIGINAL_PROPS extends object> {
  $overwrite?: Optional<ORIGINAL_PROPS> | Optional<ORIGINAL_PROPS>[]
  $preserve?: Optional<ORIGINAL_PROPS> | Optional<ORIGINAL_PROPS>[]
}

function withPropsMerge<ORIGINAL_PROPS extends object>(OriginalComponent: FC<ORIGINAL_PROPS>) {
  return forwardRef((p: ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>, ref) => {
    // @ts-ignore
    const { $overwrite = [], $preserve = [], children, ...props } = p
    const $overwrite_ = _.isArray($overwrite) ? $overwrite : [$overwrite]
    const $preserve_ = _.isArray($preserve) ? $preserve : [$preserve]
    const mergedProps = mergeObjects(...$preserve_, props, ...$overwrite_)
    const mergedPropsFiltered = _.omit(mergedProps as any, ['$overwrite', '$preserve', 'children'])
    return (
      <OriginalComponent {...(mergedPropsFiltered as ORIGINAL_PROPS)} ref={ref}>
        {children}
      </OriginalComponent>
    )
  })
}

export default withPropsMerge

// interface ButtonProps {
//   label: string
//   test?: number
// }
// const Button = (props: ButtonProps) => {
//   return <button></button>
// }
// const ButtonM = withPropsMerge(Button)
// const App = () => {
//   return <ButtonM label="" test={12} $overwrite={{ label: '' }}></ButtonM>
// }
