import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  Renderer2,
} from '@angular/core';

import { ToasterService } from '@coreui/angular';

@Component({
  selector: 'app-toast-simple',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [
    {
      provide: ToastComponent,
      useExisting: forwardRef(() => ToastComponent),
    },
  ],
})
export class ToastComponent {
  @Input() closeButton = true;
  @Input() title = '';

  constructor(
    public hostElement: ElementRef,
    public renderer: Renderer2,
    public toasterService: ToasterService,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    // super(hostElement, renderer, toasterService, changeDetectorRef);
  }
}
