import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photosForApproval: Photo[];


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.adminService.getPhotosForApproval().subscribe(photos => {
      this.photosForApproval = photos;
    });
  }

  approvePhoto(photoID: number) {
    this.adminService.approvePhoto(photoID).subscribe(() => {
      this.photosForApproval.filter(p => p.id !== photoID);
    })
  }

  rejectPhoto(photoID: number) {
    this.adminService.rejectPhoto(photoID).subscribe(() => {
      this.photosForApproval.filter(p => p.id !== photoID);
    })
  }

}
