package com.example.demo.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ArmyRequest {
    private Integer armyId;
    private String leaderName;
    private String raceName;
    private String provinceName;
}
