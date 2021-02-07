import { Component, h } from '@stencil/core';

/**
 * Renders my-component with some extra information around slotted children.
 */
@Component({
  tag: 'slot-component',
  shadow: false
})
export class SlotComponent {
  render() {
    return (
      <div>
        Before My Component
        <my-component>
          Before slot | <slot /> | After slot
        </my-component>
        After My Component
      </div>
    );
  }
}
