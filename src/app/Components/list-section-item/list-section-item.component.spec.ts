import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectionItemComponent } from './list-section-item.component';

describe('ListSectionItemComponent', () => {
  let component: ListSectionItemComponent;
  let fixture: ComponentFixture<ListSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSectionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
