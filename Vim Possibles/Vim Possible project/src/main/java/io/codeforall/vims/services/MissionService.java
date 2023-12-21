package io.codeforall.vims.services;

import io.codeforall.vims.Jpa.JpaMissionDao;
import io.codeforall.vims.Persistence.Mission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MissionService {
    private JpaMissionDao missionDao;

    @Autowired
    public void setMissionDao(JpaMissionDao missionDao) {
        this.missionDao = missionDao;
    }


    public Mission get(Integer id) {
        return missionDao.findById(id);
    }

    @Transactional
    public Mission save(Mission mission) {
        return missionDao.saveOrUpdate(mission);
    }

    @Transactional
    public void delete(Integer id) {
        Mission mission = Optional.ofNullable(missionDao.findById(id)) //se o valor for nulo, ele cria uma instancia vazia da Optional class especificada (generics)
                .orElseThrow(() -> new RuntimeException("Spy not found"));

        missionDao.delete(id);
    }

    public List<Mission> list() {
        return missionDao.findAll();

    }
}
