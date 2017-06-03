
import { Injectable } from "@angular/core";


declare let toastr : any; //declare toastr to be something in the global scope

@Injectable()
export class ToastrService{

    constructor(){

    }

    success(message : string, title? : string){
        toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "30",
  "hideDuration": "100",
  "timeOut": "50",
  "extendedTimeOut": "100",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
        toastr.success(message, title, {timeOut: 500, showDuration : 500, hideDuration : 500});
    }

    info(message : string, title? : string){
        toastr.info(message, title);
    }

    warning(message : string, title? : string){
        toastr.warning(message, title);
    }

    error(message : string, title? : string){
        toastr.error(message, title);
    }
}