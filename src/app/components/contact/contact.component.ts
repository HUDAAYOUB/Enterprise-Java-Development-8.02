import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      occupation: [''],
      subject: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Submit the form (e.g., send data to server)
      console.log('Form submitted!', this.contactForm.value);
      this.contactForm.reset(); // Clear the form after submission
    } else {
      // Highlight invalid fields and show error messages
      this.contactForm.markAllAsTouched();
    }
  }
}
