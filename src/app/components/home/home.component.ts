import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  
  videos:any[] = [];
  videoSeleccionado: any;
  
  constructor( public _yts: YoutubeService ) {
    this._yts.getVideos().subscribe( v => { this.videos = v } );
  }

  ngOnInit() {
  }

  verVideo( video:any ){
    this.videoSeleccionado = video;
  }

  cerrarModal(){
    this.videoSeleccionado = null;
  }

  cargarVideos(){
    this._yts.getVideos().subscribe( v => { this.videos.push.apply( this.videos, v ) } );
  }

}
