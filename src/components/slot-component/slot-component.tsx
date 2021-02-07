import { Component, h } from '@stencil/core';

@Component({
  tag: 'slot-component',
  shadow: false
})
export class SlotComponent {
  render() {
    return (
      <div>
        <my-component>
          Before slot | <slot /> | After slot
        </my-component>
      </div>
    );
  }
}
