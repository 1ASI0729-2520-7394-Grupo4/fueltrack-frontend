import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  imports: [
    CommonModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './new-order.html',
  styleUrl: './new-order.css'
})
export class NewOrder {
  step = 0;
  orderForm!: FormGroup;
  terminals = ['Callao', 'Lurín', 'Pisco'];
  fuelTypes = ['GLP', 'GNV', 'Diesel B5'];
  banks = ['BCP Soles', 'BBVA', 'Interbank', 'Scotiabank'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewOrder>
  ) {
    this.orderForm = this.fb.group({
      responsible: [''],
      terminal: [''],
      details: this.fb.array([
        this.createDetailGroup()
      ]),
      payments: this.fb.array([
        this.createPaymentGroup()
      ])
    });
  }

  get details(): FormArray {
    return this.orderForm.get('details') as FormArray;
  }

  get payments(): FormArray {
    return this.orderForm.get('payments') as FormArray;
  }

  createDetailGroup(): FormGroup {
    return this.fb.group({
      fuel: [''],
      amount: [''],
      note: ['']
    });
  }

  createPaymentGroup(): FormGroup {
    return this.fb.group({
      bank: [''],
      amount: [''],
      date: [''],
      operation: ['']
    });
  }

  addDetail() {
    this.details.push(this.createDetailGroup());
  }

  addPayment() {
    this.payments.push(this.createPaymentGroup());
  }

  next() {
    if (this.step < 2) this.step++;
  }

  back() {
    if (this.step > 0) this.step--;
  }

  close() {
    this.dialogRef.close();
  }

  createOrder() {
    console.log(this.orderForm.value);
    this.dialogRef.close(this.orderForm.value);
  }
}
