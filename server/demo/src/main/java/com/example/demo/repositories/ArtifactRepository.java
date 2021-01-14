package com.example.demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Artifact;

@Repository
public interface ArtifactRepository  extends JpaRepository<Artifact, Long> {
}