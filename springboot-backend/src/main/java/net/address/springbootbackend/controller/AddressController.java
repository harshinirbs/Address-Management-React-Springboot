package net.address.springbootbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.address.springbootbackend.repository.AddressRepository;
import net.address.springbootbackend.exception.ResourceNotFoundException;
import net.address.springbootbackend.model.Address;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/myportal/address")
public class AddressController {

  @Autowired
  private AddressRepository addressRepository;

  @GetMapping
  public List<Address> getAllAddresses() {
    return addressRepository.findAll();
  }

  @PostMapping
  public Address createAddress(@RequestBody Address address) {
    return addressRepository.save(address);
  }

  @GetMapping("{id}")
  public ResponseEntity<Address> getAddressById(@PathVariable Long id) {
    Address address = addressRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
    return ResponseEntity.ok().body(address);
  }

  @PutMapping("{id}")
  public ResponseEntity<Address> updateAddress(@PathVariable Long id, @RequestBody Address addressDetails) {
    Address updateAddress = addressRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
    updateAddress.setAddress1(addressDetails.getAddress1());
    updateAddress.setAddress2(addressDetails.getAddress2());
    updateAddress.setCountry(addressDetails.getCountry());
    updateAddress.setZipPostal(addressDetails.getZipPostal());
    addressRepository.save(updateAddress);
    return ResponseEntity.ok(updateAddress);
  }

  @DeleteMapping("{id}")
  public ResponseEntity<HttpStatus> deleteAddress(@PathVariable Long id){
    Address address = addressRepository.findById(id)
    .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
    addressRepository.delete(address);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

}
