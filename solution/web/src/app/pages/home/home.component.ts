import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  state: number = 0; // 0 = nothing, 1 = erase, 2 = scissor, 3 = glue

  constructor() {}

  ngOnInit(): void {}

  drawRect() {}

  drawTria() {}

  drawCirc() {}

  useErase() {}

  useScissor() {}

  useGlue() {}
}
