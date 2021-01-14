package com.example.demo.Services;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Artifact;

import java.util.List;

public interface ArtifactService {

    List<Artifact> getAll();
}