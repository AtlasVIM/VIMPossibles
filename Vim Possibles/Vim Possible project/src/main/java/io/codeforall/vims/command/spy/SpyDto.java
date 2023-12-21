package io.codeforall.vims.command.spy;

import org.springframework.stereotype.Component;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Component
public class SpyDto {

    private Integer id;

    @NotNull(message = "First name is mandatory") //annotations for forms validations
    @NotBlank(message = "First name is mandatory")//annotations for forms validations
    @Size(min=3, max=64)
    private String firstNameDTO;

    @NotNull(message = "Last name is mandatory") //annotations for forms validations
    @NotBlank(message = "Last name is mandatory")//annotations for forms validations
    @Size(min=3, max=64)
    private String lastNameDTO;

    @NotNull(message = "Speciality is mandatory") //annotations for forms validations
    @NotBlank(message = "Speciality is mandatory")//annotations for forms validations
    @Size(min=3, max=64)
    private String specialityDTO;

    @NotNull(message = "Description is mandatory") //annotations for forms validations
    @NotBlank(message = "Description is mandatory")//annotations for forms validations
    @Size(min=3, max=1000)
    private String descriptionDTO;

    @NotNull(message = "Price is mandatory") //annotations for forms validations
    @NotBlank(message = "Price is mandatory")//annotations for forms validations
    private Integer priceDTO;

    private String imgURLDTO;


    public SpyDto(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstNameDTO() {
        return firstNameDTO;
    }

    public void setFirstNameDTO(String firstNameDTO) {
        this.firstNameDTO = firstNameDTO;
    }

    public String getLastNameDTO() {
        return lastNameDTO;
    }

    public void setLastNameDTO(String lastNameDTO) {
        this.lastNameDTO = lastNameDTO;
    }

    public String getSpecialityDTO() {
        return specialityDTO;
    }

    public void setSpecialityDTO(String specialityDTO) {
        this.specialityDTO = specialityDTO;
    }

    public String getDescriptionDTO() {
        return descriptionDTO;
    }

    public void setDescriptionDTO(String descriptionDTO) {
        this.descriptionDTO = descriptionDTO;
    }

    public Integer getPriceDTO() {
        return priceDTO;
    }

    public void setPriceDTO(Integer priceDTO) {
        this.priceDTO = priceDTO;
    }

    public String getImgURLDTO() {
        return imgURLDTO;
    }

    public void setImgURLDTO(String imgURLDTO) {
        this.imgURLDTO = imgURLDTO;
    }
}
