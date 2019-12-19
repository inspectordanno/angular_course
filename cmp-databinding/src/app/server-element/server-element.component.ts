import { Component, 
    OnInit, 
    Input,  
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit, 
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.heading.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ng doCheck called'); 
  }

  ngAfterContentInit() {
    console.log('afterContentInit called');
    console.log('Text Content: ' + this.heading.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('afterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('afterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
