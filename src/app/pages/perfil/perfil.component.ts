import  Swal  from 'sweetalert2';
import { FileUploadService } from './../../services/file-upload.service';
import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {


  public perfilForm: FormGroup;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp: any = null;


  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder,
  private fileUploadService:FileUploadService ) { 
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {

    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email:[this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil() { 
    
    this.usuarioService.actualizarPerfil(this.perfilForm.value)
      .subscribe(resp => {
        const { nombre, email } = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;

        Swal.fire('Guardado','Cambios fueron guardados','success')
      }, (err) => { 
          Swal.fire('Error', err.error.msg, 'error');
      });
    
    
  }


  cambiarImagen(file:File) { 
    this.imagenSubir = file;

    if (!file) { 
      return this.imgTemp=null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => { 
      this.imgTemp = reader.result;
    }

  }

  subirImagen() { 
    this.fileUploadService.
      actualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid)
      .then(img => {
        this.usuario.img = img;
        Swal.fire('Actualizacion','Imagen actualizada con exito ','success')
      }).catch(err => { 
        Swal.fire('Error','No se pudo subir la imagen','error')
      });
  }

}
