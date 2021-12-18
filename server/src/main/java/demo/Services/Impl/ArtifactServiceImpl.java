package demo.Services.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.entities.Artifact;
import demo.repositories.ArtifactRepository;
import demo.Services.ArtifactService;

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
