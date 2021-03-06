import { Routes, CanActivate } from '@angular/router';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ImageDetailComponent } from '../components/image-detail/image-detail.component';
import { LoginComponent } from '../components/login/login.component';
import { UploadComponent } from '../components/upload/upload.component';
import { AuthenticationGrand } from '../services/AuthenticationGrand';

export const appRoters: Routes = [
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGrand] },
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGrand] },
    { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGrand] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login' , pathMatch: 'full'},
    { path: '', redirectTo: '/gallery', pathMatch: 'full', canActivate: [AuthenticationGrand] }

]