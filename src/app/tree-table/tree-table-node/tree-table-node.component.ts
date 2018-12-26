import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FirstColumnDirective} from '../first-column.directive';

@Component({
  selector: 'tree-table-node',
  templateUrl: './tree-table-node.component.html',
  styleUrls: ['./tree-table-node.component.scss']
})
export class TreeTableNodeComponent implements OnInit, AfterContentInit {

  @ViewChild("columns") columns: ElementRef;
  @ViewChild("children") children: ElementRef;
  @ViewChild("caretTmpl") caretTmpl: TemplateRef<any>;
  @ViewChild("indentTmpl") indentTmpl: TemplateRef<any>;
  @ViewChild("caret", {read: ViewContainerRef}) caretContainer: ViewContainerRef;
  @ViewChild("indents", {read: ViewContainerRef}) indentsContainer: ViewContainerRef;
  @ViewChild("firstColumn") firstColumnText: ElementRef;

  @ContentChild(FirstColumnDirective) firstColumn: FirstColumnDirective;
  @ContentChildren(TreeTableNodeComponent, {descendants: true}) childNodes: QueryList<TreeTableNodeComponent>;

  hasChildren: boolean;
  areChildrenVisible = false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const childNodes = this.childNodes.filter(item => item !== this);
    this.hasChildren = childNodes.length > 0;

   setTimeout(() => {
     // this.caretContainer.createEmbeddedView(this.caretTmpl);
     this.caretContainer.createEmbeddedView(this.caretTmpl);
     if (this.firstColumnText && this.firstColumn) {
       this.renderer.appendChild(this.firstColumnText.nativeElement, this.renderer.createText(this.firstColumn.value));
     }
     childNodes.forEach(node => {
       node.indentsContainer.createEmbeddedView(this.indentTmpl);
     });
   });
  }

  toggleChildren() {
    this.areChildrenVisible = !this.areChildrenVisible;
  }
}
