package demo.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProvinceRequest {
    private String name;
    private String raceName;
    private String fractionName;
    private Integer garrison_id;
}
