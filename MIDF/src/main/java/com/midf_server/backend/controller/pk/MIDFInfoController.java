package com.midf_server.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class MIDFInfoController {

    @RequestMapping("getMIDFinfo/")
    public Map<String, String> getMIDFInfo() {
        Map<String, String> temp = new HashMap<>();
        temp.put("name", "xiuxiang wu");
        temp.put("id", "0001");
        return temp;
    }
}
