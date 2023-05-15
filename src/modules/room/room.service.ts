import { Injectable } from '@nestjs/common';
import type { EntityManager } from 'typeorm';

import type { CreateRoomBodyDto } from './dto/create-room-body.dto';
import { RoomFacilitiesEntity } from './entities/room-facilities.entity';
import { RoomEntity } from './entities/room.entity';

@Injectable()
export class RoomService {
  public async createToSanatorium(roomsData: CreateRoomBodyDto[], em: EntityManager): Promise<RoomEntity[]> {
    return Promise.all(roomsData.map(({ facilities, ...roomData }:CreateRoomBodyDto) => {
      const room = em.create(RoomEntity, roomData);
      const roomfacilities = facilities.map((facilityId:number) => ({ facilityId }));
      room.facilities = <RoomFacilitiesEntity[]> em.create(RoomFacilitiesEntity, roomfacilities);
      return room;
    }));
  }
}
