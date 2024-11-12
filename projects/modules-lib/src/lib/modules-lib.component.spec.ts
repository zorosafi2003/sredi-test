import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesLibComponent } from './modules-lib.component';

describe('ModulesLibComponent', () => {
  let component: ModulesLibComponent;
  let fixture: ComponentFixture<ModulesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
