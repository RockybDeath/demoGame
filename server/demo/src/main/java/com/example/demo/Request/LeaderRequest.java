package com.example.demo.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LeaderRequest {
    private String name;
    private String raceName;
    private Integer army_id;
    private Integer char_id;
}
