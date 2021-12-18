package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Artifact;

import java.util.List;

public interface ArtifactService {

    List<Artifact> getAll();
}