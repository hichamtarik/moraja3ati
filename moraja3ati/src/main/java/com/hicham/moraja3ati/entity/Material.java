package com.hicham.moraja3ati.entity;

import java.util.Date;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

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
    @Column(name="name") private String materialName;
    @Column(name="image_url") private String imageUrl;
    @Column(name="title") private String title;
    @Column(name="description")  private String description;
    @Column(name = "created_at", columnDefinition="DATETIME")@Temporal(TemporalType.TIMESTAMP)private Date createdAt;
    @Column(name = "updated_at", columnDefinition="DATETIME")@Temporal(TemporalType.TIMESTAMP)private Date updatedAt;
    
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
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
    public Date getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "material")
	private Set<MaterialDetail> materialDetail;
}
