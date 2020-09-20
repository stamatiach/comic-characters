import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})
export class ImagePlaceholderDirective{
  @Input() src:string;
  @Input() default:string;
  @HostBinding('class') className: string;

  updateUrl() {
    this.src = this.default;
    this.className = 'default';
  }
}