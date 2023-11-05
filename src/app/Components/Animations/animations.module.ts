import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesRainComponent } from './particles-rain/particles-rain.component';
import { NgParticlesModule } from "ng-particles"

@NgModule({
  declarations: [
    ParticlesRainComponent
  ],
  imports: [
    CommonModule,
    NgParticlesModule
  ],
  exports: [
    ParticlesRainComponent
  ]
})
export class AnimationsModule { }
