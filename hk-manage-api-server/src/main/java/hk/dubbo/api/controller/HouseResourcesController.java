package hk.dubbo.api.controller;

import com.alibaba.fastjson.JSON;
import hk.dubbo.api.service.HouseResourcesService;
import hk.dubbo.server.pojo.Estate;
import hk.dubbo.server.pojo.HouseResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("house/resources")
public class HouseResourcesController {

    @Autowired
    private HouseResourcesService houseResourcesService;

    /**
     * 新增房源
     * @return String
     */
    @PostMapping
    @ResponseBody
    public String save(HttpServletRequest request) {


        String formData1 = request.getParameter("formData");
        String facilities1 = request.getParameter("facilities");
        //处理checkboxes数据
        String[] checkboxes = facilities1.substring(1, facilities1.length() - 1).replace("\"", "").split(",");
        String facilitiesCb = "";

        for (int i = 0; i < checkboxes.length; i++) {

            if (i == checkboxes.length - 1) {
                facilitiesCb += checkboxes[i];
            } else {
                facilitiesCb += checkboxes[i] + ",";
            }
        }


        //使用alibaba的fastJSON进行数据解析
        HouseResources houseResources = JSON.parseObject(formData1, HouseResources.class);
        Estate estate = JSON.parseObject(formData1, Estate.class);

        houseResources.setFacilities(facilitiesCb);

        System.out.println("新增房源----json数据");
        System.out.println("formData1: " + formData1);
        System.out.println("HouseResources: " + houseResources.toString());
        System.out.println("Estate: " + estate.toString());
        System.out.println("facilities1: " + facilities1);
        // boolean save = houseResourcesService.save(houseResources);
        // System.out.println(save);
        //
        // List<HouseResources> all = houseResourcesService.findAll();
        // System.out.println(all);
        // return all.toString();
        return formData1 + "\n--------------------------\n"  + facilities1;

    }




    /**
     * test
     *
     * @return
     */
    @GetMapping
    @ResponseBody
    public ResponseEntity<String> get() {
        return ResponseEntity.ok("ok");
    }
}
