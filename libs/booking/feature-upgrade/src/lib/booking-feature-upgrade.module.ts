import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@flights/booking/domain';
import { UpgradeComponent } from './upgrade.component';

@NgModule({
  imports: [CommonModule, BookingDomainModule],
  declarations: [UpgradeComponent],
  exports: [UpgradeComponent],
})
export class BookingFeatureUpgradeModule {}
