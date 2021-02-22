package hk.dubbo.api.service;

import hk.dubbo.server.api.ApiHouseResourcesService;
import hk.dubbo.server.pojo.HouseResources;
import com.alibaba.dubbo.config.annotation.Reference;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 调用服务模块的接口
 */
@Service
public class HouseResourcesService {

    @Reference(version = "1.0.0")
    private ApiHouseResourcesService apiHouseResourcesService;

    public boolean save(HouseResources houseResources) {
        int result =
                this.apiHouseResourcesService.saveHouseResources(houseResources);
        return result == 1;
    }

    public List<HouseResources> findAll(){
       return this.apiHouseResourcesService.findAll();
    }

    public HouseResources findOneById(int i) {
        return this.apiHouseResourcesService.findOneById(i);
    }
}