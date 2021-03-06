import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}
   
    @HostListener("click") onClicks(){
    this.textDeco('purple')
  }

   @HostListener("dblclick") onDoubleClicks(){
    this.textDeco('')
  }
   
   private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
   }


}
