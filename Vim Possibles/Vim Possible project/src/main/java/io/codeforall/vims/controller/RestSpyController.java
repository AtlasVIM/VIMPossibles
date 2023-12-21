package io.codeforall.vims.controller;
import io.codeforall.vims.Persistence.Spy;
import io.codeforall.vims.command.spy.DtoToSpy;
import io.codeforall.vims.command.spy.SpyDto;
import io.codeforall.vims.command.spy.SpyToDto;
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
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/spy")
public class RestSpyController {

    private SpyService spyService;
    private SpyToDto spyToDto;
    private DtoToSpy dtoToSpy;


    @Autowired
    public void setSpyService(SpyService spyService) {
        this.spyService = spyService;
    }

    @Autowired
    public void setDtoToSpy(DtoToSpy dtoToSpy) {
        this.dtoToSpy = dtoToSpy;
    }

    @Autowired
    public void setSpyToDto (SpyToDto spyToDto){
        this.spyToDto =  spyToDto;
    }

    @RequestMapping(method = RequestMethod.GET, path = {"/",""})
    public ResponseEntity<List<SpyDto>> listSpy(){
        List<SpyDto> spyDtos = spyService.list().stream()
                .map(spy -> spyToDto.convertToDto(spy))
                .collect(Collectors.toList());
        return new ResponseEntity<>(spyDtos, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<SpyDto> showSpy(@PathVariable Integer id){
        Spy spy = spyService.get(id);

        if(spy ==  null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(spyToDto.convertToDto(spy), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/", ""})
    public ResponseEntity<?> addSpy(@Valid @RequestBody SpyDto spyDto, BindingResult bindingResult, UriComponentsBuilder uriComponentsBuilder){

        if(bindingResult.hasErrors() || spyDto.getId() != null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Spy newSpy = spyService.save(dtoToSpy.convert(spyDto));

        UriComponents uriComponents = uriComponentsBuilder.path("/api/spy/" + newSpy.getId()).build();

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<SpyDto> deleteSpy(@PathVariable Integer id){

        try{
            spyService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(ObjectNotFoundException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }






}
