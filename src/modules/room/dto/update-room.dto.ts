import { PartialType } from '@nestjs/swagger';
import { CreateRoomBodyDto } from './create-room-body.dto';

export class UpdateRoomDto extends PartialType(CreateRoomBodyDto) {}
