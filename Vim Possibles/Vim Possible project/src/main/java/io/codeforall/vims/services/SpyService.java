package io.codeforall.vims.services;

import io.codeforall.vims.Jpa.JpaMissionDao;
import io.codeforall.vims.Jpa.JpaSpyDao;
import io.codeforall.vims.Persistence.Mission;
import io.codeforall.vims.Persistence.Model;
import io.codeforall.vims.Persistence.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SpyService {
    private JpaSpyDao spyDao;
    private JpaMissionDao missionDao;

    @Autowired
    public void setSpyDao(JpaSpyDao spyDao) {
        this.spyDao = spyDao;
    }
    @Autowired
    public void setMissionDao(JpaMissionDao missionDao) {
        this.missionDao = missionDao;
    }

    public Spy get (Integer id){
        return spyDao.findById(id);
    }

    @Transactional
    public Spy save(Spy spy){
        return spyDao.saveOrUpdate(spy);
    }

    @Transactional
    public void delete (Integer id){
        Spy spy = Optional.ofNullable(spyDao.findById(id)) //se o valor for nulo, ele cria uma instancia vazia da Optional class especificada (generics)
                .orElseThrow(()-> new RuntimeException("Spy not found"));

        spyDao.delete(id);
    }

    public List<Spy> list(){
        return spyDao.findAll();
    }


    @Transactional
    public Mission addMission(Integer id, Mission mission) {

        Spy spy = Optional.ofNullable(spyDao.findById(id))
                .orElseThrow(()-> new RuntimeException("Spy not found"));


        spy.addMission(mission);
        spyDao.saveOrUpdate(spy);

        return spy.getMissions().get(spy.getMissions().size() - 1);
    }


    @Transactional
    public void closeMission (Integer id, Integer missionId) {

       Spy spy = Optional.ofNullable(spyDao.findById(id))
               .orElseThrow(()-> new RuntimeException("Spy not found"));

        Mission mission = Optional.ofNullable(missionDao.findById(missionId))
                .orElseThrow(()-> new RuntimeException("Spy not found"));

        if (!mission.getSpy().getId().equals(id)) {
            throw new RuntimeException("Spy not found");
        }



        spy.removeMission(mission);
        spyDao.saveOrUpdate(spy);
    }

    private Set<Integer> getMissionIds(Spy spy) {
        List<Mission> missions = spy.getMissions();

        return missions.stream()
                .map(Model::getId)
                .collect(Collectors.toSet());
    }
}
