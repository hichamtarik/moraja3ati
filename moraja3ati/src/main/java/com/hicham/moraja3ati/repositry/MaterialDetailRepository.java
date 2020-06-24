package com.hicham.moraja3ati.repositry;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import com.hicham.moraja3ati.entity.MaterialDetail;

@RepositoryRestResource(collectionResourceRel = "materialDetails", path = "material-details")
public interface MaterialDetailRepository extends JpaRepository<MaterialDetail, Long>{
	
	@RestResource(path = "materialDetailId")
	Page<MaterialDetail> findById(@Param("id") Long id, Pageable pageable);
}
