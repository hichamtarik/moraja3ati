package com.hicham.moraja3ati.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.hicham.moraja3ati.entity.MaterialDetail;

@RepositoryRestResource(collectionResourceRel = "materialDetails", path = "material-details")
public interface MateialDetailRepository extends JpaRepository<MaterialDetail, Long>{

}
