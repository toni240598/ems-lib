import { CommandEnum } from '../enums/command.enum';
import { Param } from './param.interface';



export interface CommandInterface {
    moId: number;
    cmd: CommandEnum;
    params: Param[];
}
