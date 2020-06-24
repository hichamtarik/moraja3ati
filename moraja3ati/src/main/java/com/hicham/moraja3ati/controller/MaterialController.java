package com.hicham.moraja3ati.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hicham.moraja3ati.entity.Material;
import com.hicham.moraja3ati.repositry.MaterialRepository;

@RestController // This means that this class is a Controller
@RequestMapping(path="/api") // This means URL's start with /demo (after Application path)
public class MaterialController {
	  
	@Autowired // This means to get the bean called MaterialRepository
	private MaterialRepository materialRepository;// Which is auto-generated by Spring, we will use it to handle the data
	 
	// ********************** Get all data ****************************************************** 
	  @GetMapping(path="/materials")
	  public @ResponseBody Iterable<Material> getAllMaterials() {
	    // This returns a JSON or XML with the Material
	    return materialRepository.findAll();
	  }
	
	  //*************************  Get a Single data ************************************************
	  @GetMapping("/materials/{id}")
	    public ResponseEntity<Material> getMaterialById(@PathVariable(value = "id") Long materialId)
	        throws ResourceNotFoundException {
	        Material material = materialRepository.findById(materialId)
	          .orElseThrow(() -> new ResourceNotFoundException("material not found for this id :: " + materialId));
	        return ResponseEntity.ok().body(material);
	    }
	  
	  //******************* this for insert data **************************************	
	  @PostMapping(path="/materials") // Map ONLY POST Requests
	  public @ResponseBody String addNewMaterial (@RequestParam String materialName, @RequestParam String imageUrl, @RequestParam String title, @RequestParam String description) {
	    // @ResponseBody means the returned String is the response, not a view name
	    // @RequestParam means it is a parameter from the GET or POST request
		Date createdAt = new Date(); // this for insert date and time 
		Material material = new Material();
	    material.setMaterialName(materialName);
		material.setTitle(title);
		material.setDescription(description);
		material.setImageUrl(imageUrl);
		material.setCreatedAt(createdAt);
	    materialRepository.save(material);
	    return "Saved";
	  }
	
	//************************  this for update date ***********************************  
	  @PutMapping("/materials/{id}")
	    public ResponseEntity<Material> updatematerial(@PathVariable(value = "id") Long materialId, @RequestParam String materialName, @RequestParam String imageUrl, @RequestParam String title, @RequestParam String description) throws ResourceNotFoundException {
	        Material material = materialRepository.findById(materialId).orElseThrow(() -> new ResourceNotFoundException("material not found for this id :: " + materialId));
	        
	        Date updatedAt = new Date(); // this for insert date and time 
			material.setMaterialName(materialName);
	    	material.setTitle(title);
	    	material.setDescription(description);
	    	material.setImageUrl(imageUrl);
	    	material.setUpdatedAt(updatedAt);
	    	
	        final Material updatedmaterial = materialRepository.save(material);
	        return ResponseEntity.ok(updatedmaterial);
	    }
	  //**********************   this for data data *************************************
	  @DeleteMapping("/materials/{id}")
		public Map<String, Boolean> deleteMaterial(@PathVariable(value = "id") Long materialId) throws ResourceNotFoundException {
			Material material = materialRepository.findById(materialId).orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + materialId));

			materialRepository.delete(material);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return response;
		}
}