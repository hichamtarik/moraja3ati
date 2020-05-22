package com.hicham.moraja3ati.entity;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="material")
@Setter
@Getter
@ToString
public class Material {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	@Column(name="name")
    private String materialName;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "materielDetailMaterialId")
	private Set<MaterialDetail> materialId;
}

