package net.address.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.address.springbootbackend.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
    
}
