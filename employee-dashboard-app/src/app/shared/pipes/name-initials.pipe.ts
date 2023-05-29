import { Pipe, PipeTransform } from '@angular/core';
import { RegistrationCredentials } from 'src/app/core/auth/models/credentials.interface';

@Pipe({
  name: 'nameInitials',
})
export class NameInitialsPipe implements PipeTransform {
  transform(user: RegistrationCredentials): string {
    return `${user.firstName.substring(0, 1)}${user.lastName.substring(0, 1)}`;
  }
}
