import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const headers = new HttpHeaders(
      {'Content-Type' : 'application/json'}
    );
    alert("Thank you! Your message has been sent. I will get back to you as soon as possible!");
    this.http.post(
      'https://formspree.io/f/mgerarvd',
      {
        name: this.name,
        replyto: this.email,
        message: this.message,
      },
      { headers: headers }
    )
    .subscribe(() => {});
  }
}
