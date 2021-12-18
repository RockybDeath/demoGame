package demo.Services;
import org.springframework.stereotype.Service;
import demo.entities.Battle_result;

import java.util.Date;
import java.util.List;

public interface Battle_resultService {

    List<Battle_result> getAll();
    void setResult(int a , String b, boolean c, String province);
}

