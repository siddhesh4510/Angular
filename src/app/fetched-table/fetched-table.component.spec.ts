import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedTableComponent } from './fetched-table.component';

describe('FetchedTableComponent', () => {
  let component: FetchedTableComponent;
  let fixture: ComponentFixture<FetchedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
