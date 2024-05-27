import { Directive, ElementRef, Renderer2, effect } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Directive({
  selector: '[appLoader]',
  standalone: true
})
export class LoaderDirective {

  startText: string = '';

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2,
    private loaderService: LoaderService
  ) {
    effect(() => {
      console.log('directiva', this.loaderService.isLoading());
      if (this.loaderService.isLoading()) {
        this.disabled();
      } else {
        this.enabled();
      }
    })

    
  }

  ngAfterViewInit() {
    this.startText = this.getElBtn().textContent || '';
  }

  private disabled(): void {
    this.getElBtn().disabled = true;

    this.getElBtn().textContent = 'Cargando...';

    const matIconElement = this.renderer2.createElement('mat-icon');
    this.renderer2.setAttribute(matIconElement, 'fontIcon', 'refresh');
    // Insertar el mat-icon antes del contenido del botón
    this.renderer2.insertBefore(this.el.nativeElement, matIconElement, this.el.nativeElement.firstChild);
  }

  private enabled(): void {
    this.getElBtn().disabled = false;
    this.getElBtn().textContent = this.startText;

    const spiner = this.getElBtn().querySelector('mat-icon');

    if(spiner){
      this.renderer2.removeChild(this.el.nativeElement, spiner);
    }
  }

  private getElBtn(): HTMLButtonElement {
    return this.el.nativeElement as HTMLButtonElement;
  }

}
