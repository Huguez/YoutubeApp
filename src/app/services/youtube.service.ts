import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  private youtubeURL: string = "https://www.googleapis.com/youtube/v3";
  private apikey: string = "AIzaSyDH2NbYtTWjaH_0sWLoOPn9VxuG3fnJ4tI";
  private playlist:string = "UUp-dUNu9eRL7NRfV2BIslew";
  private nextPageToken:string = ""; //"CAoQAA";
  // upload UUuaPTYj15JSkETGnEseaFFg

  constructor( public http: HttpClient ) { }

  getVideos(){
    let url:string =  `${ this.youtubeURL }/playlistItems?part=snippet&maxResults=10&playlistId=${this.playlist}&key=${this.apikey}`;
    
    return this.http.get(url).pipe(
      map( (resp:any) => {
        this.nextPageToken = resp.nextPageToken;

        let videos:any[] = [];
        for( let video of resp.items ){
          
          let snippet = video.snippet;

          videos.push( snippet );
        }
        return videos;
      } ) );
  }
}
