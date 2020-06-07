package com.hicham.moraja3ati.repositry;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.hicham.moraja3ati.entity.MaterialDetail;

@RepositoryRestResource(collectionResourceRel = "materialDetails", path = "material-details")
@CrossOrigin("http://127.0.0.1:4200")

public interface MaterialDetailRepository extends JpaRepository<MaterialDetail, Long>{
	
	@RestResource(path = "materialId")
	Page<MaterialDetail> findByMaterialId(@Param("id") Long id, Pageable pageable);
}
