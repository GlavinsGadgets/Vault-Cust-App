import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@IonicPage()
@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }


playVideo() {
  this.youtube.openVideo('kGq3p8DwQIk');
}

}