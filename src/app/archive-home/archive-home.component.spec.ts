import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveHomeComponent } from './archive-home.component';

describe('ArchiveHomeComponent', () => {
  let component: ArchiveHomeComponent;
  let fixture: ComponentFixture<ArchiveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
