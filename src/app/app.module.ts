import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeItemComponent } from './tree-view/tree-item/tree-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TreeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
