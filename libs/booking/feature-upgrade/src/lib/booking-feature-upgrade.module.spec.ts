import { async, TestBed } from '@angular/core/testing';
import { BookingFeatureUpgradeModule } from './booking-feature-upgrade.module';

describe('BookingFeatureUpgradeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingFeatureUpgradeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingFeatureUpgradeModule).toBeDefined();
  });
});
