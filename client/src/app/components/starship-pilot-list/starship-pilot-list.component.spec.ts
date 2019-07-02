import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipPilotListComponent } from './starship-pilot-list.component';

describe('StarshipPilotListComponent', () => {
  let component: StarshipPilotListComponent;
  let fixture: ComponentFixture<StarshipPilotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipPilotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipPilotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
