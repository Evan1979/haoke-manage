package hk.dubbo.server.api.impl;

import hk.dubbo.server.api.ApiHouseResourcesService;
import hk.dubbo.server.pojo.HouseResources;
import com.alibaba.dubbo.config.annotation.Service;
import hk.dubbo.server.service.IHouseResourcesService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Dubbo接口实现类
 */

@Service(version = "1.0.0")
public class ApiHouseResourcesServiceImpl implements ApiHouseResourcesService {

    @Autowired
    private IHouseResourcesService iHouseResourcesService;

    @Override
    public int saveHouseResources(HouseResources houseResources) {
        return this.iHouseResourcesService.saveHouseResources(houseResources);
    }

    @Override
    public List<HouseResources> findAll() {
        return iHouseResourcesService.findAll();
    }

    /**
     * 根据id查询一条
     * @param i
     * @return
     */
    @Override
    public HouseResources findOneById(int i) {
        return iHouseResourcesService.findOneById(i);
    }
}
