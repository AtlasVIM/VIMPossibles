package io.codeforall.vims.Jpa;

import io.codeforall.vims.Persistence.Model;
import io.codeforall.vims.Persistence.Spy;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class JpaSpyDao implements Daos<Spy> {

    protected Class <Spy> spy = Spy.class;

    @PersistenceContext
    protected EntityManager em;

    public void setEm(EntityManager em){
        this.em=em;
    }


    @Override
    public List<Spy> findAll() {
        CriteriaQuery<Spy> criteriaQuery = em.getCriteriaBuilder().createQuery(spy);
        Root<Spy> root = criteriaQuery.from(spy);
        return em.createQuery("from " + spy.getSimpleName(), spy).getResultList();
    }

    @Override
    public Spy findById(Integer id) {
        return em.find(spy, id);
    }

    @Override
    public Spy saveOrUpdate(Spy spy) {
        return em.merge(spy);
    }

    @Override
    public void delete(Integer id) {
         em.remove(em.find(spy, id));
    }
}
