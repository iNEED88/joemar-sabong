import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var feather: any; // ✅ outside the class
declare var $: any;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {
  showProfileMenu = false;
  isSidebarVisible = true;
  isMobileSidebarOpen = false;
  feather: any;
  constructor() { }

  ngOnInit(): void {
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


  ngAfterViewInit(): void {
    this.loadScript('assets/js/icons/feather-icon/feather.min.js');
    this.loadScript('assets/js/icons/feather-icon/feather-icon.js');
    this.loadScript('assets/js/scrollbar/simplebar.min.js');
    this.loadScript('assets/js/scrollbar/custom.js');
    this.loadScript('assets/js/config.js');
    this.loadScript('assets/js/sidebar-menu.js');
    this.loadScript('assets/js/sidebar-pin.js');
    this.loadScript('assets/js/slick/slick.min.js');
    this.loadScript('assets/js/slick/slick.js');
    this.loadScript('assets/js/header-slick.js');
    this.loadScript('assets/js/prism/prism.min.js');
    this.loadScript('assets/js/script.js');
    this.loadScript('assets/js/script1.js');


    if (feather) {
      feather.replace();
    }


    setTimeout(() => {
      if ($ && typeof $.fn.slick !== 'undefined') {
        $('.notification-slider').slick({
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          dots: false
        });
        console.log('Slick initialized');
      } else {
        console.warn('Slick is not available');
      }
    }, 100);
  }

  toggleSidebar(): void {
    alert("aw")
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  toggleMobileSidebar(): void {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  toggleFullscreen() {
    const doc: any = document;
    const docEl: any = document.documentElement;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
  }

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-only'); // or your theme class
  }



}
