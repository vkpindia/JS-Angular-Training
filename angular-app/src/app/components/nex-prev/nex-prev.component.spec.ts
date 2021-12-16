import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexPrevComponent } from './nex-prev.component';

describe('NexPrevComponent', () => {
  let component: NexPrevComponent;
  let fixture: ComponentFixture<NexPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NexPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NexPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
