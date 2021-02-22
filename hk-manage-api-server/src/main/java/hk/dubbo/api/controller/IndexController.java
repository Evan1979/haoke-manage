package hk.dubbo.api.controller;

import hk.dubbo.api.service.HouseResourcesService;
import hk.dubbo.server.pojo.HouseResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * 2021-02-18 19:42
 *
 * @author Evan Ma
 * @since
 **/

@Controller
public class IndexController {
    @Autowired
    private HouseResourcesService houseResourcesService;

    @GetMapping("index")
    public ModelAndView indexPage(HttpServletRequest request, Model model){

        HouseResources oneById = houseResourcesService.findOneById(10);
        System.out.println("HouseResources:  " +oneById);

        /*
            "title": "东方曼哈顿2021 3室2厅 16000元",
            "buildingNum": "2",
            "buildingUnit": "1",
            "buildingFloorNum": "1",
            "rent": "1111",
            "paymentMethod": "1",
            "rentMethod": "1",
            "coveredArea": "2",
            "useArea": "2",
            "orientation": "南",
            "decoration": "1",
            "facilities": "1,2,3,8,9",
            "houseDesc": "这个经纪人很懒，没写核心卖点",
            "contact": "张三",
            "mobile": "11111111111",
            "time": "1",
            "propertyCost": "11",
            "floor": "1/2",
            "houseType": "1室1厅1卫1厨1阳台",
            "estateId": "1005"
         */
        ;
        model.addAttribute("houseResources",oneById);
        return new ModelAndView("index","model", model);
    }

    @GetMapping("backstageSupporter")
    public ModelAndView backstageSupporter(HttpServletRequest request, Model model){

        model.addAttribute("user","Evan1997");
        return new ModelAndView("backstageSupporter","model",model);
    }


}
