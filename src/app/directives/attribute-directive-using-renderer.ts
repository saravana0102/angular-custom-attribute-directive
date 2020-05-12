import {Directive, ElementRef, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector : '[appBetterAttribute]'
})

export class AttributeDirectiveUsingRenderer implements OnInit{
  
  @Input() hightlightColor : string = 'yellow';

  constructor(private elementRef : ElementRef,
  private renderer : Renderer2){}

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',this.hightlightColor);
  }
}