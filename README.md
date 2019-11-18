# vue-test-utils-shallow-repro

1. clone this repo
2. `npm i`
3. `npm t`

Notice that Parent's snapshot and ParentLazy's snapshot should be the same, but the shallowMounted lazy loaded component is also rendering the child.

By the other hand, the wrapper.html() in the ParentLazy 'reproduction shallow' does not have the Child info (but snapshot does).
