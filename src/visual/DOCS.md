# Volumeme

With the purpose of separating `logic` and `rendering`, the `Volumeme` interface was created. It's supposed to represent the qualities of an object within the stage; but without having to make the implementation dependent on, for example, ThreeJs-specific primitives.

This state is kept separately and updated using the `update` method for `actors`/`scenes`. After this, the app calls the `draw` method, which invokes the `Reconciler.draw()` abstraction; which receives a scene, and updates the rendering-specific implementation accordingly.

This way, the renderer can be replaced later; achieving lower-levels of coupling between app logic and app rendering.
