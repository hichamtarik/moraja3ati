package com.hicham.moraja3ati.entity;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	@Column(name="name")
    private String MaterielDetailName;
	@Column(name="image_url")
    private String imageUrl;
    private String title;
    private String description;  

	@ManyToOne
	@JoinColumn(name="teacher_id", nullable = false)
	private MaterialDetail materielDetailTeacherId;

	@ManyToOne
	@JoinColumn(name="material_id", nullable = false)
	private MaterialDetail materielDetailMaterialId;
}
