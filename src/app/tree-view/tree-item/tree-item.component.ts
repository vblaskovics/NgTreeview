import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent {
  constructor() { }

  @Input() dataForTheTree;
}
