package io.codeforall.vims.command.spy;

import io.codeforall.vims.Persistence.Spy;
import org.springframework.stereotype.Component;

@Component
public class DtoToSpy {

    private Spy spy;



    public Spy convert(SpyDto spyDto){
        spy = new  Spy();
        spy.setFirstName(spyDto.getFirstNameDTO());
        spy.setLastName(spyDto.getLastNameDTO());
        spy.setSpeciality(spyDto.getSpecialityDTO());
        spy.setDescription(spyDto.getDescriptionDTO());
        spy.setPrice(spyDto.getPriceDTO());
        spy.setImgURL(spyDto.getImgURLDTO());
        return spy;
    }

}
