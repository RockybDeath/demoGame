package com.example.demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Artifact;
import com.example.demo.repositories.ArtifactRepository;
import com.example.demo.Services.ArtifactService;

import java.util.List;

@Service
public class ArtifactServiceImpl implements ArtifactService {
    @Autowired
    private ArtifactRepository artifactRepository;

    @Override
    public List<Artifact> getAll() {
        return artifactRepository.findAll();
    }
}
