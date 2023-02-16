import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipsComponent } from './startships.component';

describe('StartshipsComponent', () => {
  let component: StartshipsComponent;
  let fixture: ComponentFixture<StartshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
