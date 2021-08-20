import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css'],
})
export class ProfileCreateComponent implements OnInit {
  createProfileForm: FormGroup;
  avatarHasLoaded: Boolean;
  new_avatar: any;
  user_id: any;

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private authService: AuthService,
    private router: Router
  ) {
    this.createProfileForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      picture: ['', Validators.required],
    });

    this.avatarHasLoaded = false;
  }

  ngOnInit(): void {
    this.user_id = this.authService.getAuthenticatedUserId();
    this.userProfileService.get_user_profile(this.user_id).subscribe(
      (res: any) => {
        console.log('user profile exists', res);
      },
      (error) => {
        if (error) {
          console.error(error);
          this.router.navigate(['/profile/create']);
        }
      }
    );
  }

  onSubmit() {
    let form_data = this.createProfileForm.value;

    const new_profile = new FormData();

    new_profile.append('first_name', form_data.first_name);
    new_profile.append('last_name', form_data.last_name);
    new_profile.append('picture', this.new_avatar);
    new_profile.append('user', `${this.user_id}`);

    this.userProfileService
      .create_user_profile(new_profile)
      .subscribe((res) => {
        this.router.navigate(['/profile/edit']);
      });
  }

  uploadAvatar(event: any) {
    this.new_avatar = event.target.files[0];
  }
}
