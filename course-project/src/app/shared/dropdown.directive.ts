import { Directive,
         OnInit, 
         Input,
         HostBinding,
         HostListener,
         ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

//closed by clicked on dropdown
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen: boolean = false;

    ngOnInit(){}

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}

//closed by clicking anywhere outside
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;
//     @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//       this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//     }
//     constructor(private elRef: ElementRef) {}
// }



