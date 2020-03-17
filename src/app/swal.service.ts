import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  private Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: false,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  private ProfileOptions = Swal.mixin({
    position : 'bottom',
    showConfirmButton : false,
    width : "20rem"
  })


  ngOnInit(): void {
  }

  public displayToast(icon, message){
    this.Toast.fire({
      icon : icon,
      title : message
    })
  }

  public displayProfileOptions(body){
    this.ProfileOptions.fire({
      html : body
    })
  }
}
