package io.codeforall.vims.command.logmissions;

import io.codeforall.vims.Persistence.Mission;
import org.springframework.stereotype.Component;

@Component
public class DtoToMission {

    private Mission mission;

    public Mission convert(MissionDto missionDto){
        mission = new Mission();
        mission.setTarget(missionDto.getTarget());
        mission.setDescription(missionDto.getDescription());
        return mission;
    }
}
