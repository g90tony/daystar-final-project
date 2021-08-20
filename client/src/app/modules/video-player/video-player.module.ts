import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoPlayerComponent } from '../../components/reusable/video-player/video-player.component';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [CommonModule, YouTubePlayerModule],
  exports: [VideoPlayerComponent],
})
export class VideoPlayerModule {}
