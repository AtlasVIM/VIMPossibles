package io.codeforall.vims.Jpa;

import io.codeforall.vims.Persistence.Mission;
import io.codeforall.vims.Persistence.Spy;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class JpaMissionDao implements Daos<Mission>{

    protected Class <Mission> mission = Mission.class;

    @PersistenceContext
    protected EntityManager em;

    public void setEm(EntityManager em){
        this.em=em;
    }
    @Override
    public List<Mission> findAll() {
        CriteriaQuery<Mission> criteriaQuery = em.getCriteriaBuilder().createQuery(mission);
        Root<Mission> root = criteriaQuery.from(mission);
        return em.createQuery("from " + mission.getSimpleName(), mission).getResultList();
    }

    @Override
    public Mission findById(Integer id) {
        return em.find(mission, id);
    }

    @Override
    public Mission saveOrUpdate(Mission mission) {
        return em.merge(mission);
    }

    @Override
    public void delete(Integer id)  {
        em.remove(em.find(mission, id));
    }
}
