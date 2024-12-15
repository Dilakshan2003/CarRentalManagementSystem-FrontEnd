import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-window',
  standalone: false,

  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {


  @ViewChild('videoElement',{ static: false }) videoElement!: ElementRef;

  videoUrl = 'images/car-window.mp4';

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.loop = true;
    video.autoplay = true;
    video.muted = true;
    video.play().catch(error => {
      console.error('Error playing video:', error);
    });
  }



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
