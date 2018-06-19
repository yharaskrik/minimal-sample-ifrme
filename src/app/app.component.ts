import {Component, ComponentFactoryResolver, ComponentRef, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {InIframeComponent} from './in-iframe/in-iframe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('iframe') iframe: ElementRef;

  doc: any;

  compRef: ComponentRef<InIframeComponent>;

  constructor(private vcRef: ViewContainerRef,
              private componentResolver: ComponentFactoryResolver,) {

  }

  onLoad(c) {
    this.doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    const compFactory = this.componentResolver.resolveComponentFactory(InIframeComponent);
    this.compRef = this.vcRef.createComponent(compFactory);

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
}
