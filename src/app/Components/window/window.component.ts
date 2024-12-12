import { Component } from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: false,
  
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent  {

  

  // @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;

  // ngAfterViewInit() {
  //   const video = this.videoElement.nativeElement;
  //   video.currentTime = 0; // Reset the video to the start
  // }



   images: string[] = [
    'url(/images/bugatti-sport-car-77.jpg)',
    'url(/images/slide-2.webp)',
    'url(/images/slider-3.jpg)'
 ];
    currentIndex: number = 0;

   constructor() { }

    ngOnInit(): void {
     this.startImageSlider();
      }

     startImageSlider() {
     setInterval(() => {
       this.currentIndex = (this.currentIndex + 1) % this.images.length;
     }, 4000); 
  }

   get backgroundImage() {
     return this.images[this.currentIndex];
   }
 }
