package hk.dubbo.api.controller;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hk.dubbo.api.service.EstateService;
import hk.dubbo.server.pojo.Estate;
import hk.dubbo.server.pojo.HouseResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class EstateController {

    @Autowired
    private EstateService estateService;


    @GetMapping("estateNames")
    public ModelAndView estateNames(HttpServletRequest request, Model model){
        return new ModelAndView("selectEstate","model", model);
    }


    /**
     * 获取楼盘名称
     * @return String
     */
    @PostMapping("/getEstateName")
    @ResponseBody
    public String getEstateNames(String name) {

        System.out.println("EstateController is entered");
        System.out.println("name: "+ name);

        List<Estate> estateList = estateService.findByLikeName(name);
        int size = estateList.size();
        String results = null;
        if (size != 0){
            results = JSON.toJSONString(estateList);
        }else {
            results = "";
        }
        System.out.println("results: " + results);
        return results;
    }




    /**
     * 获取楼盘名称
     * @return String
     */
    @PostMapping("/getName")
    @ResponseBody
    public String getNames(String name) {

        System.out.println("EstateController is entered");


        List<Estate> estateList = estateService.findByLikeName(name);
        int size = estateList.size();
        String results = null;
        if (size != 0){
            results = JSON.toJSONString(estateList);
        }else {
            results = "";
        }
        System.out.println("results: " + results);
        return results;
    }


    /**
     * test
     *
     * @return
     */
    @GetMapping("/getOk")
    @ResponseBody
    public ResponseEntity<String> get() {
        return ResponseEntity.ok("ok");
    }
}
