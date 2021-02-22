package hk.dubbo.server.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hk.dubbo.server.mapper.HouseResourcesMapper;
import hk.dubbo.server.pojo.HouseResources;
import hk.dubbo.server.service.IHouseResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 2021-02-18 15:43
 *
 * @author Evan Ma
 * @since
 *  extends BaseServiceImpl
 **/
@Service
public class HouseResourcesServiceImpl implements IHouseResourcesService {

    @Autowired
    private HouseResourcesMapper houseResourcesMapper;

    @Override
    public int saveHouseResources(HouseResources houseResources) {
        return houseResourcesMapper.insert(houseResources);
    }

    @Override
    public List<HouseResources> findAll() {
        return houseResourcesMapper.findAll();
    }

    @Override
    public HouseResources findOneById(int i) {
        QueryWrapper<HouseResources> wrapper = new QueryWrapper<>();
        wrapper.eq("id", i);
        return houseResourcesMapper.selectOne(wrapper);
    }

    /**
     * 查询房源并且显示房源所对应的楼盘信息
     * @return
     */


}
