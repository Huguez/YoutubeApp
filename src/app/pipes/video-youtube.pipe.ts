import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {
  constructor( private dom :DomSanitizer ){}


  transform( value: string  ) : any{
    let url = "https://www.youtube.com/embed/";
    console.log( url + value );
    
    return this.dom.bypassSecurityTrustResourceUrl( url + value );
  }

}
