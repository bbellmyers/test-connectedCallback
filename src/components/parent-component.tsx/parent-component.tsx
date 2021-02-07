import { Component, h } from '@stencil/core';

/**
 * Renders the slot-component, with a child for the slot. This child will be
 * passed to slot-component, which will in turn pass it to my-component.
 */
@Component({
  tag: 'parent-component',
  shadow: false
})
export class ParentComponent {
  render() {
    return (
      <slot-component>
        <span>Written by Parent</span>
      </slot-component>
    );
  }
}
