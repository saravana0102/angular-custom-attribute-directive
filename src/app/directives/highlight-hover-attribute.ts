import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector : '[appHighlightHover]'
})

export class HighlightHoverDirective implements OnInit{
  
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elementRef : ElementRef,
  private renderer : Renderer2){}

  ngOnInit(){
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseover') mouseover(event:Event){
      this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(event:Event){
      this.backgroundColor = 'transparent';
  }
}