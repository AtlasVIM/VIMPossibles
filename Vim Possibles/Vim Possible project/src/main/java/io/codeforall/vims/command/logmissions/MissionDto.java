package io.codeforall.vims.command.logmissions;

import org.springframework.stereotype.Component;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Component
public class MissionDto {

    private Integer id;



    @NotNull(message="Target is mandatory")
    @NotBlank(message="Target is mandatory")
    private String target;


    @NotNull(message = "Description is mandatory") //annotations for forms validations
    @NotBlank(message = "Description is mandatory")//annotations for forms validations
    private String description;


    public MissionDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
