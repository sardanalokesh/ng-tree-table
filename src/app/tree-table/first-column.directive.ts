import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[firstColumn]'
})
export class FirstColumnDirective implements OnInit {

  value: string;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.value = this.element.nativeElement.innerHTML;
    this.element.nativeElement.outerHTML = "<!-- -->";
  }

}
