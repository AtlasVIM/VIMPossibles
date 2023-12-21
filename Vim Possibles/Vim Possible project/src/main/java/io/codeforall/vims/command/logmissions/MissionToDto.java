package io.codeforall.vims.command.logmissions;

import io.codeforall.vims.Persistence.Mission;
import org.springframework.stereotype.Component;

@Component
public class MissionToDto {

    private MissionDto missionDto;

    public MissionDto convertToDto (Mission mission){
        missionDto = new MissionDto();
        missionDto.setId(mission.getId());
        missionDto.setTarget(mission.getTarget());
        missionDto.setDescription(mission.getDescription());
        return missionDto;
    }
}
