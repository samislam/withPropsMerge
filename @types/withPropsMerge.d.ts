import React, { FC } from 'react';
import { Optional } from 'utility-types';
interface MergerProps<ORIGINAL_PROPS extends object> {
    $overwrite?: Optional<ORIGINAL_PROPS> | Optional<ORIGINAL_PROPS>[];
    $preserve?: Optional<ORIGINAL_PROPS> | Optional<ORIGINAL_PROPS>[];
}
declare function withPropsMerge<ORIGINAL_PROPS extends object>(OriginalComponent: FC<ORIGINAL_PROPS>): React.ForwardRefExoticComponent<React.PropsWithoutRef<ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>> & React.RefAttributes<unknown>>;
export default withPropsMerge;
//# sourceMappingURL=withPropsMerge.d.ts.map