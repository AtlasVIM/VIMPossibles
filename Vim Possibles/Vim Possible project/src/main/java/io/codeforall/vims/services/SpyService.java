package io.codeforall.vims.services;

import io.codeforall.vims.Jpa.JpaSpyDao;
import io.codeforall.vims.Persistence.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class SpyService {
    private JpaSpyDao spyDao;

    @Autowired
    public void setSpyDao(JpaSpyDao spyDao) {
        this.spyDao = spyDao;
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
}
