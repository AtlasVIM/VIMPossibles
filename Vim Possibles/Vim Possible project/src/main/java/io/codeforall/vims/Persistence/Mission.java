package io.codeforall.vims.Persistence;

import javax.persistence.*;

@Entity
@Table(name="Missions")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Mission extends ModelClass{

    @ManyToOne
    private Spy spy;
    private String target;
    private String description;


    public Spy getSpy() {
        return spy;
    }

    public void setSpy(Spy spy) {
        this.spy = spy;
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
