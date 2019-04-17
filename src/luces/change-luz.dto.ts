import { IsInt, IsString } from 'class-validator';
export class ChangeLuzDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly state: boolean;
}
