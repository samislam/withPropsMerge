import { FC } from 'react';
import { Optional } from 'utility-types';
interface MergerProps<ORIGINAL_PROPS extends object> {
    $overwrite?: Optional<ORIGINAL_PROPS>;
    $preserve?: Optional<ORIGINAL_PROPS>;
}
declare function withPropsMerge<ORIGINAL_PROPS extends object>(OriginalComponent: FC<ORIGINAL_PROPS>): FC<ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>>;
export default withPropsMerge;
//# sourceMappingURL=withPropsMerge.d.ts.map