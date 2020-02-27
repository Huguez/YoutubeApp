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
    let url:string =  `${ this.youtubeURL }/playlistItems?part=snippet&maxResults=10&playlistId=${this.playlist}&apikey=${this.apikey}`;
    //let url:string =  `${ this.youtubeURL }/playlistItems`;
    /*
    const parametros = new HttpParams();
    parametros.set('part', 'snippet');
    parametros.set('maxResults', '10');
    parametros.set('playlistId', this.playlist);
    parametros.set('key', this.apikey);
    */

    //const url = `${ this.urlapi }/playlistItems`;
  
    return this.http.get(url).pipe(
      map( (resp:any) => {
        this.nextPageToken = resp.json().nextPageToken;
        
        let videos:any[] = [];
        for( let videos of resp.json().items ){
          let snippet = videos.snippet;
          videos.push( snippet );
        }
        return videos;
      } ) );
  }
}
