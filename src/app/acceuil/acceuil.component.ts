import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
declare var $;
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
data;
  constructor(private service:UserserviceService) { 


  }

  ngOnInit() {
    $('.home__carousel').owlCarousel({
      mouseDrag: false,
      touchDrag: false,
      dots: false,
      loop: true,
      autoplay: false,
      smartSpeed: 600,
      margin: 30,
      responsive : {
        0 : {
          items: 2,
        },
        576 : {
          items: 2,
        },
        768 : {
          items: 3,
        },
        992 : {
          items: 4,
        },
        1200 : {
          items: 4,
          margin: 50
        },
      }
    });
  
    $('.home__nav--next').on('click', function() {
      $('.home__carousel, .home__bg').trigger('next.owl.carousel');
    });
    $('.home__nav--prev').on('click', function() {
      $('.home__carousel, .home__bg').trigger('prev.owl.carousel');
    });
  
    $(window).on('resize', function() {
      var itemHeight = $('.home__bg').height();
      $('.home__bg .item').css("height", itemHeight + "px");
    });
    $(window).trigger('resize');











  }




















  
}
