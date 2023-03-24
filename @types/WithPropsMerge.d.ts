import { FC } from 'react';
import { Optional } from 'utility-types';
interface MergerProps<ORIGINAL_PROPS extends object> {
    $overwrite?: Optional<ORIGINAL_PROPS>;
    $preserve?: Optional<ORIGINAL_PROPS>;
}
declare function WithMergeProps<ORIGINAL_PROPS extends object>(OriginalComponent: FC<ORIGINAL_PROPS>): FC<ORIGINAL_PROPS & MergerProps<ORIGINAL_PROPS>>;
export default WithMergeProps;
//# sourceMappingURL=WithPropsMerge.d.ts.map