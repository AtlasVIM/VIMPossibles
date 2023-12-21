package io.codeforall.vims.Jpa;

import io.codeforall.vims.Persistence.Model;

import java.util.List;


public interface Daos<T extends Model> {

    List<T> findAll();

    T findById(Integer id);

    T saveOrUpdate(T modelObject);

    void delete(Integer id);


}
