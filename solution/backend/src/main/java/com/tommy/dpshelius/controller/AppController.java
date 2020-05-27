package com.tommy.dpshelius.controller;

import com.google.common.collect.ImmutableMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dbs")
public class AppController {

    @RequestMapping("/")
    @CrossOrigin("http://localhost:4200")
    @ResponseBody
    Map<String,Object> getList(){
        Map<String,Object> result = new HashMap<>();
        result.put("canvas-size", ImmutableMap.of("width","600","height","600"));
        result.put("toolbar", ImmutableMap.of("scissor",true,"eraser",true,"glue",true));
        result.put("rectangle", ImmutableMap.of(
                "default",new int[]{10,10,100,100},
                "left",new int[]{10,10,50,100},
                "right",new int[]{70,10,50,100}));

        result.put("circle", ImmutableMap.of(
                "default",new int[]{450,350,50,0},
                "top",new int[]{450,350,50,0},
                "bottom",new int[]{450,370,50,0}));
        result.put("triangle", ImmutableMap.of(
                "default",new int[]{50,140,150,60,250,140},
                "left",new int[]{50,140,150,60,150,140},
                "right",new int[]{160,140,160,60,260,140}
                ));
        return result;
    }
}
