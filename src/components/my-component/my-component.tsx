import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: false
})
export class MyComponent {

  @Element() el: HTMLElement;

  connectedCallback() {
    console.log('connected callback');
    const { el } = this;
    const child = el.querySelector('span')?.outerHTML;
    const html = el.outerHTML;
    console.log({html, child});
  }

  // eslint-disable-next-line class-methods-use-this
  componentWillLoad() {
    console.log('will load');
    const { el } = this;
    const child = el.querySelector('span')?.outerHTML;
    const html = el.outerHTML;
    console.log({html, child});
  }

  render() {
    return (
      <div class="hello">
        <slot />
      </div>
    );
  }
}
