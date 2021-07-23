import {Component, ErrorHandler, OnInit} from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {HttpResponse} from '@angular/common/http';
import {Customer} from '../../models/customer';
import {Exception} from '../../models/exception';
import {Error} from 'tslint/lib/error';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [AppServiceService]
})
export class HomePageComponent implements OnInit {

  customers: Customer[];
  customer: any;
  exception: Exception;
  columnsToDisplay = ['id', 'firstName', 'lastName', 'email', 'phone'];
  advancedSearch = false;
  customerId: number;
  form: FormGroup;

  constructor(private service: AppServiceService, private fb: FormBuilder) {
    this.form = fb.group({
      firstName: '',
      lastName: '',
    });
  }

  ngOnInit(): void {
  }

  getAllCustomers() {

    this.advancedSearch = true;
    this.service.getData().subscribe((res: HttpResponse<any[]>) => {
        this.customers = res.body;
        console.log(res.body);
      },
      error => {

      },
      () => {
      }
    );
  }

  getCustomerById(id) {
    console.log(id);
    this.advancedSearch = false;
    this.service.getDataWithId(id).subscribe((res: HttpResponse<any>) => {
        this.customer = res.body;
      },
      error => {

        console.log(error);
        console.log(error.status);
        console.log(error.error.code);
        console.log(error.error.message);
        console.log(error.error.time);
      },
      () => {
      }
    );
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
