import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourBlocksComponent } from './colour-blocks.component';

describe('ColourBlocksComponent', () => {
  let component: ColourBlocksComponent;
  let fixture: ComponentFixture<ColourBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
