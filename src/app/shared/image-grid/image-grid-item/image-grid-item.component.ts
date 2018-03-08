import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-grid-item',
  templateUrl: 'image-grid-item.component.html',
  styleUrls: ['image-grid-item.component.scss'],
})

export class ImageGridItemComponent {

  @Input() src: string;
}
