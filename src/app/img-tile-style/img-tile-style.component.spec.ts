import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTileStyleComponent } from './img-tile-style.component';

describe('ImgTileStyleComponent', () => {
  let component: ImgTileStyleComponent;
  let fixture: ComponentFixture<ImgTileStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTileStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTileStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
