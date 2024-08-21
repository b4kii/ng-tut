import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
    calendarForm: FormGroup = new FormGroup({
        name: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
    });

    handleSubmit() {
        console.log(`${this.calendarForm.value.name} - ${this.calendarForm.value.description}`);
    }
}
