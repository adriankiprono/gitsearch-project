import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {


  constructor(private elem:ElementRef) { }
  @HostListener('mouseenter') onMouseenter(){
    this.textDeco("underline")
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.textDeco("none")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }


}
