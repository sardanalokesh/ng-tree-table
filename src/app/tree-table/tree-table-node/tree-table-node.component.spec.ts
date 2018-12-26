import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableNodeComponent } from './tree-table-node.component';

describe('TreeTableNodeComponent', () => {
  let component: TreeTableNodeComponent;
  let fixture: ComponentFixture<TreeTableNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeTableNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTableNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
