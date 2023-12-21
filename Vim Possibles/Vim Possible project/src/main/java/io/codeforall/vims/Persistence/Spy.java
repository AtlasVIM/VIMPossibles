package io.codeforall.vims.Persistence;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Spies")
public class Spy extends ModelClass{

    private String firstName;

    private String lastName;

    private String speciality;

    private String description;

    private int price;

    private String imgURL;


    @OneToMany(
            // propagate changes on customer entity to account entities
            cascade = {CascadeType.ALL},

            // make sure to remove accounts if unlinked from customer
            orphanRemoval = true,

            // user customer foreign key on account table to establish
            // the many-to-one relationship instead of a join table
            mappedBy = "spy",

            // fetch accounts from database together with user
            fetch = FetchType.EAGER
    )
    private List<Mission> missions = new ArrayList<>();

    public List<Mission> getMissions() {
        return missions;
    }

    public void setMissions(List<Mission> missions) {
        this.missions = missions;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


    public void addMission(Mission mission) {
        missions.add(mission);
        mission.setSpy(this);
    }


    public void removeMission(Mission mission) {
        missions.remove(mission);
        mission.setSpy(this);
    }

}
