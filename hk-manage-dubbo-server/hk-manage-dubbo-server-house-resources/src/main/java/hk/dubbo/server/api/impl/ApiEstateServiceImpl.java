package hk.dubbo.server.api.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hk.dubbo.server.api.ApiEstateService;
import hk.dubbo.server.pojo.Estate;
import hk.dubbo.server.service.IEstateService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Dubbo接口实现类
 */

@Service(version = "1.0.0")
public class ApiEstateServiceImpl implements ApiEstateService {

    @Autowired
    private IEstateService iEstateService;


    @Override
    public List<Estate> findAll() {
        return iEstateService.findAll();
    }

    @Override
    public Estate findOneById(int id) {
        return iEstateService.findOneById(id);
    }

    @Override
    public int save(Estate estate) {
        return iEstateService.save(estate);
    }

    @Override
    public List<Estate> findByWrapper(QueryWrapper<Estate> queryWrapper) {
        return iEstateService.findByWrapper(queryWrapper);
    }

    @Override
    public List<Estate> findByLikeName(String name) {
        return iEstateService.findByLikeName(name);
    }
}
