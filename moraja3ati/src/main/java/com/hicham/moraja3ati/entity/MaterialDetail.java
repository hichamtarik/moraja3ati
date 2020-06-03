package com.hicham.moraja3ati.entity;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="matrial_detail")
@Setter
@Getter
@ToString
public class MaterialDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	
    @Column(name="name") private String materialDetailName;
  @Column(name="image_url") private String imageUrl;
  @Column(name="title") private String title;
  @Column(name="description")  private String description;
  @Column(name="created_at") private Timestamp createdOn; 
  
  public long getId() {
      return id;
  }
  public void setId(int id) {
      this.id = id;
  }
  public String getMaterialDetailName() {
      return materialDetailName;
  }
  public void setMaterialDetailName(String materialDetailName) {
      this.materialDetailName = materialDetailName;
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
  	public Timestamp  getCreatedOn() {
      return createdOn;
  	}
  	public void setCreatedOn(Timestamp createdOn) {
      this.createdOn = createdOn;
  	}
  
  
	@ManyToOne
	@JoinColumn(name="teacher_id", nullable = false)
	private MaterialDetail materielDetailTeacherId;

	@ManyToOne
	@JoinColumn(name="material_id", nullable = false)
	private MaterialDetail materielDetailMaterialId;
	
	
}
