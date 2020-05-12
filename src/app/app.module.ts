import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicAttributeDirective } from './directives/basic-attribute-directive';
import { AttributeDirectiveUsingRenderer } from './directives/attribute-directive-using-renderer';
import { HighlightHoverDirective } from './directives/highlight-hover-attribute';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,BasicAttributeDirective
  ,AttributeDirectiveUsingRenderer,HighlightHoverDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
