import { Component, h } from '@stencil/core';

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
