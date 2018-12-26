import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreeTableNodeComponent } from './tree-table-node/tree-table-node.component';
import { FirstColumnDirective } from './first-column.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TreeTableComponent,
    TreeTableNodeComponent,
    FirstColumnDirective
  ],
  declarations: [
    TreeTableComponent,
    TreeTableNodeComponent,
    FirstColumnDirective
  ]
})
export class TreeTableModule { }
