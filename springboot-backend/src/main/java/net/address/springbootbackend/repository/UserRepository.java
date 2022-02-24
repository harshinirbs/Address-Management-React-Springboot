package net.address.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.address.springbootbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
