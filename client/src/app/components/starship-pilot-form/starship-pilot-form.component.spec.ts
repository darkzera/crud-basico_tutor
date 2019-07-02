import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipPilotFormComponent } from './starship-pilot-form.component';

describe('StarshipPilotFormComponent', () => {
  let component: StarshipPilotFormComponent;
  let fixture: ComponentFixture<StarshipPilotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipPilotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipPilotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
