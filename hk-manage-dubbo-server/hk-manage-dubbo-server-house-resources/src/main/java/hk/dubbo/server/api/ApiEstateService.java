package hk.dubbo.server.api;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hk.dubbo.server.pojo.Estate;

import java.util.List;

/**
 * Dubbo接口
 */
public interface ApiEstateService {

    List<Estate> findAll();

    Estate findOneById(int i);

    int save(Estate estate);

    List<Estate> findByWrapper(QueryWrapper<Estate> queryWrapper);

    List<Estate> findByLikeName(String name);
}