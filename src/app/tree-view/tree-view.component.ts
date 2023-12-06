import { Component } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  treeData = [
    {
      name: 'Work Documents',
      children: [
        {
          name: 'Functional Specifications',
          children: [
            {
              name: 'TreeView Spec'
            }
          ]
          
        },
        {
          name: 'Feature Schedule'
        },
        {
          name: 'Overall Project Plan'
        },
        {
          name: 'Feature Resources Allocation'
        }
      ]
    },
    {
      name: 'Personal Folder',
      children: [
        {
          name: 'Home Remodel Folder',
          children: [
            {
              name: 'Contractor Contact Info'
            },
            {
              name: 'Paint Color Scheme'
            },
            {
              name: 'Flooring Woodgran type'
            },
            {
              name: 'Kitchen Cabinet Style'
            }
          ]
        }
      ]
    }
  ]
}
