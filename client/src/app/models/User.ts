import { Role } from './Role';
export interface User { 
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    role: Role;
    token?: string;
    datahora?: Date;
}
