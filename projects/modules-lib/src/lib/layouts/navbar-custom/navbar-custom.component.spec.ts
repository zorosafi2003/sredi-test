import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCustomComponent } from './navbar-custom.component';

describe('NavbarCustomComponent', () => {
  let component: NavbarCustomComponent;
  let fixture: ComponentFixture<NavbarCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
