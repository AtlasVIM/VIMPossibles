package io.codeforall.vims.command.spy;

import io.codeforall.vims.Persistence.Spy;
import org.springframework.stereotype.Component;

@Component
public class SpyToDto {

    private SpyDto spyDto;

    public SpyDto convertToDto(Spy spy){
        spyDto = new  SpyDto();
        spyDto.setId(spy.getId());//No frontend vai ser necessário o id
        spyDto.setFirstNameDTO(spy.getFirstName());
        spyDto.setLastNameDTO(spy.getLastName());
        spyDto.setSpecialityDTO(spy.getSpeciality());
        spyDto.setDescriptionDTO(spy.getDescription());
        spyDto.setPriceDTO(spy.getPrice());
        spyDto.setImgURLDTO(spy.getImgURL());
        return spyDto;
    }

}
