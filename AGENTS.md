# What worked

- `useDeferredValue(actions)` keeps the action list render deferrable while the action count reflects the latest state immediately.
- Keep the deferred value at the rendering boundary: use `actions` for current state and counts, and `deferredActions` for the list.
