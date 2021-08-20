import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user_id: any;
  current_user: any;
  constructor(
    private userProfileService: UserProfileService,
    private authService: AuthService,
    private router: Router
  ) {
    this.user_id = this.authService.getAuthenticatedUserId();
  }

  ngOnInit(): void {
    this.userProfileService.get_user_profile(this.user_id).subscribe(
      (req) => {
        this.current_user = req;
      },
      (error) => {
        if (error) {
          this.router.navigate(['/profile/create']);
        }
      }
    );
  }
}
