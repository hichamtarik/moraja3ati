package com.hicham.moraja3ati.entity;

import java.sql.Timestamp;
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
@Table(name="matrial")
@Setter
@Getter
@ToString
public class Material {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="name") private String materialName;
    @Column(name="created_at") private Timestamp createdOn;
    
    public long getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getMaterialName() {
        return materialName;
    }
    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    public Timestamp  getCreatedOn() {
        return createdOn;
    }
    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }
    
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "materielDetailMaterialId")
	private Set<MaterialDetail> materialId;
}
