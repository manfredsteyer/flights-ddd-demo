import { Component, OnInit} from '@angular/core';
import { UpgradeFacade } from '@flights/booking/domain';

@Component({
  selector: 'booking-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
    


    constructor(private upgradeFacade: UpgradeFacade) {
    }


    ngOnInit() {
    }

}

