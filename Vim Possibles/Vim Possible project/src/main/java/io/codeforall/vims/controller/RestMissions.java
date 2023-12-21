package io.codeforall.vims.controller;

import io.codeforall.vims.Persistence.Mission;
import io.codeforall.vims.Persistence.Spy;
import io.codeforall.vims.command.logmissions.DtoToMission;
import io.codeforall.vims.command.logmissions.MissionDto;
import io.codeforall.vims.command.logmissions.MissionToDto;
import io.codeforall.vims.command.spy.SpyDto;
import io.codeforall.vims.services.MissionService;
import io.codeforall.vims.services.SpyService;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/mission")
public class RestMissions {

    private MissionService missionService;
    private SpyService spyService;
    private MissionToDto missionToDto;
    private DtoToMission dtoToMission;

    @Autowired
    public void setMissionService(MissionService missionService) {
        this.missionService = missionService;
    }

@Autowired
    public void setMissionToDto(MissionToDto missionToDto) {
        this.missionToDto = missionToDto;
    }
@Autowired
    public void setDtoToMission(DtoToMission dtoToMission) {
        this.dtoToMission = dtoToMission;
    }

    @Autowired
    public void setSpyService(SpyService spyService) {
        this.spyService = spyService;
    }





    @RequestMapping(method = RequestMethod.GET, path = "/{sid}/mission")
    public ResponseEntity<List<MissionDto>> listSpyMissions(@PathVariable Integer sid) {

        Spy spy = spyService.get(sid);

        if (spy == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<MissionDto> missionDtos = spy.getMissions().stream()
                .map(mission -> missionToDto.convertToDto(mission))
                .collect(Collectors.toList());

        return new ResponseEntity<>(missionDtos, HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.GET, path = "/{sid}/mission/{mid}")
    public ResponseEntity<MissionDto> showSpyMission(@PathVariable Integer sid, @PathVariable Integer mid) {

        Mission mission = missionService.get(mid);

        if (mission == null || mission.getSpy() == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (!mission.getSpy().getId().equals(sid)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(missionToDto.convertToDto(mission), HttpStatus.OK);
    }


    @RequestMapping(method = RequestMethod.POST, path = "/{sid}/mission")
    public ResponseEntity<?> addMission(@PathVariable Integer sid, @Valid @RequestBody MissionDto missionDto, BindingResult bindingResult, UriComponentsBuilder uriComponentsBuilder) {

        if (bindingResult.hasErrors() || missionDto.getId() != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {

            Mission mission = spyService.addMission(sid, dtoToMission.convert(missionDto));
            UriComponents uriComponents = uriComponentsBuilder.path("/api/spy/" + sid + "/mission/" + mission.getId()).build();
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(uriComponents.toUri());

            return new ResponseEntity<>(headers, HttpStatus.CREATED);

        } catch (ObjectNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }

    }


    @RequestMapping(method = RequestMethod.GET, path = "/{sid}/mission/{mid}/close")
    public ResponseEntity<?> closeMission(@PathVariable Integer sid, @PathVariable Integer mid) {

        try {

            spyService.closeMission(sid, mid);

            return new ResponseEntity<>(HttpStatus.OK);

        } catch (ObjectNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
    }
}
