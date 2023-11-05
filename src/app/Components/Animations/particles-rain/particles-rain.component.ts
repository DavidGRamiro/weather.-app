import { AfterViewInit, Component } from '@angular/core';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine, MoveGravity } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";


@Component({
  selector: 'app-particles-rain',
  templateUrl: './particles-rain.component.html',
  styleUrls: ['./particles-rain.component.css']
})
export class ParticlesRainComponent implements AfterViewInit{
  ngAfterViewInit(): void {
  }

  id = "tsparticles";

  // JSON configuracion para la lluvia

  particlesOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#1b1e34",
      },
      polygon: {
        nb_sides:10
      },
      move: {
        angle: {
          offset: 0,
          value: 0
        },
        direction: MoveDirection.bottom,
        enable: true,
        speed: 20
      },
      number: {
        value: 500
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "image",
        image: {
          src: "../../../../assets/images/pngwing.com.png",
          width:10,
          height: 10
        },
      },
      size: {
        value: 5
      },

      roll: {
        darken: {
          enable: true,
          value: 20
        },
        enlighten: {
          enable: true,
          value: 20
        },
        enable: true,
        mode: "vertical",
        speed: {
          min: 1,
          max: 5
        }
      },
      zIndex: {
        value: {
          min: 0,
          max: 50
        },
        opacityRate: 0,
        velocityRate: 3
      }
    }
  };

  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
}



}
